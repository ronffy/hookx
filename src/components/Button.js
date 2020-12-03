/**
 * @description 
 * @author ronffy
 * @Date 2020-11-16 15:16:48
 * @LastEditTime 2020-11-27 15:37:23
 * @LastEditors ronffy
 */
import React from 'react';

const Button = function Button({ onClick, children, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;