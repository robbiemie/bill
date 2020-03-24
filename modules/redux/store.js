import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers"
/**
 * 创建 store
 */
export default createStore(reducers, applyMiddleware(thunk))