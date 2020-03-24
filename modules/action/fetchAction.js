import {GET_DATALIST_REQ, GET_SUCCESS_RES} from "../constants/actionTypes"
import DataStore from "../db/dao/DataStore"

function handleData(dispatch,storeName,data) {
  dispatch({
    type: GET_SUCCESS_RES,
    storeName,
    payload: data
  })
}

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