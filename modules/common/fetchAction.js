import {GET_DATALIST_REQ} from "./../constants/actionTypes"
import DataStore from "./../db/dao/DataStore"

function handleData(dispatch,storeName,data) {
  dispatch({
    storeName,
    payload: data
  })
}

export function fetchData (storeName,url) {
  return dispatch => {
    dispatch({
      type: GET_DATALIST_REQ,
      storeName
    })
    let dataStore = new DataStore()
    dataStore.fetchNetData(url).then(data=>{
      handleData(dispatch,storeName,data)
    })
  }
}