/**
 * @description 
 * @author ronffy
 * @Date 2020-11-12 15:09:18
 * @LastEditTime 2020-11-30 15:26:48
 * @LastEditors ronffy
 */
export default function compose(...fns) {
  return (...args) => fns.reduce((a, b) => a(b(...args)));
}