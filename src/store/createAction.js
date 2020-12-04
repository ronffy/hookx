/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 15:01:16
 * @LastEditTime 2020-12-04 17:45:33
 * @LastEditors ronffy
 */
import { createAction } from 'redux-actions';
// 请求列表
export const QUERY_LIST = 'QUERY_LIST';
export const createList = createAction(
  QUERY_LIST,
  (list) => ({
    list,
  })
)

// 增加
export const INCREASE = 'INCREASE';
export const createIncrease = createAction(
  INCREASE,
  (id, count = 1) => ({
    id,
    count,
  })
)

// 减少
export const DECREASE = 'DECREASE';
export const createDecrease = createAction(
  DECREASE,
  (id, count = -1) => ({
    id,
    count,
  })
)


export const GLOBAL_ERROR = 'GLOBAL_ERROR';
export const ERROR_MESSAGE = '未知错误';
export const createGlobalError = createAction(
  GLOBAL_ERROR,
  (error) => {
    if (error == null) {
      return ERROR_MESSAGE;
    }
    let msg = '';
    if (error instanceof Error) {
      msg = error.message || error.stack || ERROR_MESSAGE;
    }
    msg = error;
    return msg;
  }
)