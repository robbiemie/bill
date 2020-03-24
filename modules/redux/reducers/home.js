import {GET_DATALIST_REQ, GET_SUCCESS_RES} from "./../../constants/actionTypes"
const initialState = {
  alipay: {
    items: [],
    isLoading: false
  }
}
export default function (state=initialState, actions) {
  switch(actions.type) {
    case GET_DATALIST_REQ:
      return {
        ...state,
        [actions.storeName]: {
          isLoading: true
        }
      }
      // break;
    case GET_SUCCESS_RES:
      return {
        ...state,
        [actions.storeName]: {
          items: actions.payload,
          isLoading: false
        }
      }
      // break;
    default:
      return state
  }
}