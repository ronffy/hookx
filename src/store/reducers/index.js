/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 14:56:30
 * @LastEditTime 2020-12-04 17:16:43
 * @LastEditors ronffy
 */
import { combineReducers } from 'redux';
import listApp from './listApp';
import app from './app';

export default combineReducers({
  app,
  listApp
})
