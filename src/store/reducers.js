/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 14:56:30
 * @LastEditTime 2020-12-03 18:53:18
 * @LastEditors ronffy
 */
import produce from 'immer';
import { combineReducers } from 'redux';

const { INCREASE, DECREASE, QUERY_LIST } = require("./createAction");

const defaultState = {
  list: [],
}
const listApp = produce((state = defaultState, { type, payload, error }) => {
  switch (type) {
    case QUERY_LIST:
      const { list } = payload;
      state.list = list;
      break;

    case INCREASE:
    case DECREASE:
      const { id, count } = payload;
      for (const item of state.list) {
        if (item.id === `${id}`) {
          item.count += count;
          break;
        }
      }
      break;

    default:
      return state;
  }
})

export default combineReducers({
  listApp
})
