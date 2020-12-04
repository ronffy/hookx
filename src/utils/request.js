/**
 * @description 
 * @author ronffy
 * @Date 2020-12-04 18:37:35
 * @LastEditTime 2020-12-04 18:46:56
 * @LastEditors ronffy
 */

import notification from "../components/notification";

export default function request(data, r) {
  return new Promise((res) => {
    setTimeout(() => {
      // 模拟错误场景
      if (r) {
        const result = {
          data,
          success: false,
          msg: '哎呀，出错了呢',
        };
        res(result);
        notification.open({
          message: result.msg,
        })
        return;
      }
      res({
        data,
        success: true,
      });
    }, 300);
  })
}