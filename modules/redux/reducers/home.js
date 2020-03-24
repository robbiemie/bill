import {GET_DATALIST_REQ, GET_SUCCESS_RES} from "./../../constants/actionTypes"
const initialState = {
  // alipay: {
  //   list: [],
  //   isLoading: false
  // }
}
export default function (state=initialState, actions) {
  console.log(`[${new Date()}] list:`, state,actions)
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
      return {
        ...state,
        [actions.storeName]: {
          ...state[actions.storeName],
          list: state[actions.storeName]?.list?.concat(actions.payload) || [actions.payload],
          isLoading: false
        }
      }
      // break;
    default:
      return state
  }
}