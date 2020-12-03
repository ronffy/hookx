/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 19:01:12
 * @LastEditTime 2020-12-01 18:10:24
 * @LastEditors ronffy
 */
const createRoutes = () => {
  return [
    {
      path: '/goods',
      component: () => import('./pages/goods/GoodsPage'),
    },
    {
      path: '/total',
      component: () => import('./pages/Total'),
    },
  ];
}

export default createRoutes
