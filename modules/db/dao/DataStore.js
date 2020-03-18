import { AsyncStorage } from "react-native"

export default class DataStore {
  /**
   * 保存数据
   * @param {*} url 
   * @param {*} data 
   * @param {*} callback 
   */
  saveData(url, data, callback) {
    if(!data || !url) return
    AsyncStorage.setItem(url,JSON.stringify(this._wrapData(data)), callback)
  }
  /**
   * 获取本地数据
   * @param {*} url 
   */
  fetchLocalData(url) {
    return new Promise((resolve,reject)=>{
      AsyncStorage.getItem(url, (err,res)=>{
        if(!err) {
          try {
            resolve(JSON.parse(res))
          } catch (e) {
            console.error(err)
            reject(err)
          }
        } else {
          console.error(err)
          reject(err)
        }
      })
    })
  }
  /**
   * 获取网络数据
   * @param {*} data 
   */
  fetchNetData(url) {
    return new Promise((resolve,reject)=>{
      fetch(url)
        .then(response =>{
          if(response.ok) {
            return response.json()
          }
          throw new Error('Network Error')
        })
        .then(data=>{
          this.saveData(url, data)
          resolve(data)
        })
        .catch(e=>{
          reject(e)
        })
    })
  }
  _wrapData(data) {
    return {
      data,
      timestamp: Date.now()
    }
  }
}