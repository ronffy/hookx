/**
 * @description 
 * @author ronffy
 * @Date 2020-12-03 14:22:35
 * @LastEditTime 2020-12-03 17:37:51
 * @LastEditors ronffy
 */
import { fetchDecreaseCount, fetchIncreaseCount, fetchList } from "../services/list";
import { 
  createIncrease, 
  createIncreaseError, 
  createList, 
  createListError,
  createDecrease,
  createDecreaseError,
} from "./createAction";

export const asyncList = () => {
  return async (dispatch, getState) => {
    let action;
    const res = await fetchList();
    if (res.success) {
      action = createList(res.data);
    } else {
      action = createListError(res.msg);
    }
    dispatch(action);
  }
}

export const asyncIncrease = (id, count = 1) => {
  return async dispatch => {
    let action;
    const res = await fetchIncreaseCount(id, count);
    if (res.success) {
      action = createIncrease(id, count);
    } else {
      action = createIncreaseError(res.msg);
    }
    dispatch(action);
  }
}

export const asyncDecrease = (id, count = -1) => {
  return async dispatch => {
    let action;
    const res = await fetchDecreaseCount(id, count);
    if (res.success) {
      action = createDecrease(id, count);
    } else {
      action = createDecreaseError(res.msg);
    }
    dispatch(action);
  }
}