/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 15:12:30
 * @LastEditTime 2020-11-30 17:35:35
 * @LastEditors ronffy
 */
import produce from 'immer';

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

// 将数据包装成后端返回的数据格式
function packData(data) {
  return {
    data,
    success: true,
    msg: '',
  }
}

export function fetchList() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(packData(list.get()))
    }, 400);
  })
}

// 增加数量
export function fetchIncreaseCount(id, count = 1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      list.changeCountById(id, count);
      res(packData(id))
    }, 400);
  })
}

// 减少数量
export function fetchDecreaseCount(id, count = -1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      list.changeCountById(id, count);
      res(packData(id))
    }, 400);
  })
}