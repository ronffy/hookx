/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 14:56:30
 * @LastEditTime 2020-12-04 18:52:10
 * @LastEditors ronffy
 */
import produce from 'immer';

const { createGlobalError } = require("../createAction");

const defaultState = {
  errorMsg: ''
}
const app = produce((state = defaultState, { type, payload }) => {
  switch (type) {
    case `${createGlobalError}`:
      state.errorMsg = payload;
      break;

    default:
      return state;
  }
})

export default app
