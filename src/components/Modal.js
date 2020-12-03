/**
 * @description 
 * @author ronffy
 * @Date 2020-11-16 18:22:57
 * @LastEditTime 2020-11-17 17:58:09
 * @LastEditors ronffy
 */
import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';



// 使用 ReactDOM.createPortal 将 Modal 渲染到 body 中

// antd 的 Modal 组件比如放在 MyP 中使用， 

const Modal = ({ children }) => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(el);
    return () => document.body.removeChild(el);
  }, [el]);

  return ReactDOM.createPortal(
    (
      <div className="modal">
        {children}
      </div>
    ),
    el
  )
}
 
export default Modal;