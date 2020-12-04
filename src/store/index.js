/**
 * @description 
 * @author ronffy
 * @Date 2020-12-02 20:11:31
 * @LastEditTime 2020-12-04 18:57:01
 * @LastEditors ronffy
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const store = createStore(
  reducers, 
  composeWithDevTools(
    applyMiddleware(thunk)  
  )
);

export const dispatch = store.dispatch;

export default store;

window.__store = store;
