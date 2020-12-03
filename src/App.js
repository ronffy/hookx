/**
 * @description 
 * @author ronffy
 * @Date 2020-11-11 15:47:53
 * @LastEditTime 2020-11-30 16:09:11
 * @LastEditors ronffy
 */
import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { withRouter } from 'react-router-dom'

function App({
  children,
  location,
  history,
}) {

  return (
    <div>
      <Layout>
        <header>今天天气不错</header>
        <section>
          {children}
        </section>
        <footer>明天肯定也是好天气</footer>
      </Layout>
    </div>
  );
}

// App 在 Route 组件外，所以通过 withRouter 监听路由的变化后的数据
export default withRouter(App)
