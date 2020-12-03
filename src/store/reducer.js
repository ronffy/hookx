/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 14:56:30
 * @LastEditTime 2020-12-03 11:39:19
 * @LastEditors ronffy
 */
import produce from 'immer';
// import compose from '../utils/compose';

const { INCREASE, DECREASE, QUERY_LIST } = require("./createAction");

const reducerList = produce((state, { type, payload }) => {
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
      break;
  }
})

// const otherReducer = (state) => state;

// export default compose(reducerList, otherReducer)
export default reducerList
