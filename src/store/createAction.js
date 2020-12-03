/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 15:01:16
 * @LastEditTime 2020-12-03 14:51:31
 * @LastEditors ronffy
 */

// 请求列表
export const QUERY_LIST = 'QUERY_LIST';
// 请求列表-错误
export const QUERY_LIST_ERROR = 'QUERY_LIST_ERROR';
export const createList = (list) => ({
  type: QUERY_LIST,
  payload: {
    list,
  }
})
export const createListError = (error) => ({
  type: QUERY_LIST_ERROR,
  error,
})


// 增加
export const INCREASE = 'INCREASE';
// 增加-错误
export const INCREASE_ERROR = 'INCREASE_ERROR';
export const createIncrease = (id, count = 1) => ({
  type: INCREASE,
  payload: {
    id,
    count,
  }
})
export const createIncreaseError = (error) => ({
  type: INCREASE_ERROR,
  error,
})



// 减少
export const DECREASE = 'DECREASE';
// 减少-错误
export const DECREASE_ERROR = 'DECREASE_ERROR';
export const createDecrease = (id, count = -1) => ({
  type: DECREASE,
  payload: {
    id,
    count,
  }
})
export const createDecreaseError = (error) => ({
  type: DECREASE_ERROR,
  error,
})
