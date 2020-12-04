/**
 * @description 
 * @author ronffy
 * @Date 2020-11-11 15:47:53
 * @LastEditTime 2020-12-04 10:13:48
 * @LastEditors ronffy
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './Routers';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
