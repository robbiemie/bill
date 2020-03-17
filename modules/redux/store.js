import { createStore } from 'redux';
import reducers from "./reducers"
/**
 * 创建 store
 */
export default createStore(reducers)