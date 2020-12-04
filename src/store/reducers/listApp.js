/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 14:56:30
 * @LastEditTime 2020-12-04 17:17:29
 * @LastEditors ronffy
 */
import produce from 'immer';

const { createIncrease, createDecrease, createList } = require("../createAction");

const defaultState = {
  list: [],
}
const listApp = produce((state = defaultState, { type, payload, error }) => {
  switch (type) {
    case `${createList}`:
      const { list } = payload;
      state.list = list;
      break;

    case `${createIncrease}`:
    case `${createDecrease}`:
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

export default listApp
