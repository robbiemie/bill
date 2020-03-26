import {GET_DATALIST_REQ, GET_SUCCESS_RES, DO_CLEAR_LIST} from "../constants/actionTypes"
import DataStore from "../db/dao/DataStore"
// 处理数据
function handleData(dispatch,storeName,data) {
  dispatch({
    type: GET_SUCCESS_RES,
    storeName,
    payload: data
  })
}
// 获取数据
export function fetchDataAction (storeName,url) {
  return dispatch => {
    dispatch({
      type: GET_DATALIST_REQ,
      storeName
    })
    let dataStore = new DataStore()
    dataStore.fetchNetData(url)
      .then(data=>{
        handleData(dispatch,storeName,data)
      })
      .catch(e=>{
        console.log(e)
      })
  }
}
// 清空数据
export function clearDataAction (storeName) {
  return dispatch => {
    dispatch({
      type: DO_CLEAR_LIST,
      storeName
    })
  }
}