/**
 * @description 错误边界组件
 * 错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误
 * 
 * 哪些错误无法捕获？
 * 1. 事件处理
 * 2. 异步代码
 * 3. 服务端渲染
 * 4. 自身抛出的错误
 * 
 * @author ronffy
 * @Date 2020-11-11 15:50:10
 * @LastEditTime 2020-11-13 17:03:22
 * @LastEditors ronffy
 */
import React from 'react';


export default class ErrorBounday extends React.Component {
  state = {
    hasError: false
  }
  // 渲染备用 UI
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }

  // 收集错误信息
  componentDidCatch(error, errorInfo) {
    const { onError } = this.props;
    onError && onError(error, errorInfo);
    console.log('componentDidCatch:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { spare } = this.props;
    if (hasError) {
      return spare || <div>貌似出错了.</div>
    }
    return this.props.children;
  }
};