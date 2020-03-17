import {DO_CHANGE} from "./../../constants/actionTypes"
const initialState = {
  count: 1
}
export default function (state=initialState, actions) {
  switch(actions.type) {
    case DO_CHANGE:
      return {
        ...state,
        count: actions.payload
      }
      break;
    default:
      return state
  }
}