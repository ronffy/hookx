/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 15:12:30
 * @LastEditTime 2020-12-04 18:47:52
 * @LastEditors ronffy
 */
import produce from 'immer';
import request from '../utils/request';

const list = {
  data: [
    {
      id: '1',
      name: 'apple',
      count: 2,
    },
    {
      id: '2',
      name: 'banana',
      count: 2,
    },
    {
      id: '3',
      name: 'orange',
      count: 4,
    },
  ],
  get() {
    return [...list.data];
  },
  changeCountById(id, count = 1) {
    list.data = produce(list.data, draft => {
      for (const item of draft) {
        if (item.id === `${id}`) {
          item.count += count;
          break;
        }
      }
    })
  }
}

export function fetchList() {
  return request(list.get());
}

// 增加数量
export function fetchIncreaseCount(id, count = 1) {
  list.changeCountById(id, count);
  return request(id);
}

// 减少数量
export function fetchDecreaseCount(id, count = -1) {
  list.changeCountById(id, count);
  // 模拟报错场景
  return request(id, id === '2' ? true : false);
}