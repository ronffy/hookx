/**
 * @description 
 * @author ronffy
 * @Date 2020-12-03 14:22:35
 * @LastEditTime 2020-12-03 15:39:07
 * @LastEditors ronffy
 */

import { dispatch } from ".";
import { fetchDecreaseCount, fetchIncreaseCount, fetchList } from "../services/list";
import { 
  createIncrease, 
  createIncreaseError, 
  createList, 
  createListError,
  createDecrease,
  createDecreaseError,
} from "./createAction";

export const asyncList = async (id) => {
  let action;
  const res = await fetchList(id);
  if (res.success) {
    action = createList(res.data);
  } else {
    action = createListError(res.msg);
  }
  dispatch(action);
  return res;
}

export const asyncIncrease = async (id, count = 1) => {
  let action; 
  const res = await fetchIncreaseCount(id, count);
  if (res.success) {
    action = createIncrease(id, count);
  } else {
    action = createIncreaseError(res.msg);
  }
  dispatch(action);
  return res;
}

export const asyncDecrease = async (id, count = -1) => {
  let action;
  const res = await fetchDecreaseCount(id, count);
  if (res.success) {
    action = createDecrease(id, count);
  } else {
    action = createDecreaseError(res.msg);
  }
  dispatch(action);
  return res;
}