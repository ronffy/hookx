/**
 * @description 
 * @author ronffy
 * @Date 2020-11-27 15:42:16
 * @LastEditTime 2020-12-03 16:15:22
 * @LastEditors ronffy
 */
import React, { Profiler, useCallback, useMemo } from 'react';
import './App.css';
import ErrorBounday from './components/ErrorBounday';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import Dynamic from './components/Dynamic'
import createRoutes from './createRoutes';
import { Provider } from './hookx/hookx';
import store from './store'

const Routers = () => {
  const routes = useMemo(() => createRoutes(), []);

  const handleRender = useCallback((
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions 的集合
  ) => {

  }, []);

  return (
    <ErrorBounday>
      <Profiler id="app" onRender={handleRender}>
        <Provider store={store}>
          <BrowserRouter>
            <App>
              <Switch>
                {
                  routes.map(({ path, component, ...otherProps }) => (
                    <Route
                      exact
                      key={path}
                      path={path}
                    >
                      <Dynamic
                        component={component}
                        {...otherProps}
                      />
                    </Route>
                  ))
                }
                <Route>
                  坏了吧，没找到内容呢.
                  </Route>
              </Switch>
            </App>
          </BrowserRouter>
        </Provider>
      </Profiler>
    </ErrorBounday>
  );
}

export default Routers;