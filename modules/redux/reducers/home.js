import {GET_DATALIST_REQ, GET_SUCCESS_RES, DO_CLEAR_LIST } from "./../../constants/actionTypes"
const initialState = {
  // alipay: {
  //   list: [],
  //   isLoading: false
  // }
}
export default function (state=initialState, actions) {
  // console.log(`[${new Date()}] list:`, state,actions)
  switch(actions.type) {
    case GET_DATALIST_REQ:
      return {
        ...state,
        [actions.storeName]: {
          ...state[actions.storeName],
          isLoading: true
        }
      }
      // break;
    case GET_SUCCESS_RES:
      let store = state[actions.storeName]
      let list = store?.list || []
      list.push(actions.payload)
      return {
        ...state,
        [actions.storeName]: {
          ...state[actions.storeName],
          list,
          isLoading: false
        }
      }
    case DO_CLEAR_LIST:
      return {
        ...state,
        [actions.storeName]: {
          ...state[actions.storeName],
          list: [],
          isLoading: false
        }
      }
    default:
      return state
  }
}