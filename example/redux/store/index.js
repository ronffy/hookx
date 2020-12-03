/**
 * @description 
 * @author ronffy
 * @Date 2020-12-02 20:11:31
 * @LastEditTime 2020-12-03 16:30:04
 * @LastEditors ronffy
 */
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, {
  list: []
});

export const dispatch = store.dispatch;

export default store;

window.__store = store;
