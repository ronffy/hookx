/**
 * @description 
 * @author ronffy
 * @Date 2020-12-04 16:05:20
 * @LastEditTime 2020-12-04 18:57:35
 * @LastEditors ronffy
 */
import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

const Notice = ({ message, content, onClose, onClick, contaienr }) => {
  const el = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    contaienr.appendChild(el);
    return () => {
      contaienr.removeChild(el);
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ReactDOM.createPortal(
    <div onClick={onClick} className="u-notice">
      <header>
        {
          message
            ? <span style={{ color: 'red' }}>{message}</span>
            : null
        }
        <icon onClick={onClose}>x</icon>
      </header>
      <div>
        {content}
      </div>
    </div>,
    el
  )
}

class Notification {
  els = []
  root = null
  constructor() {
    this.initRoot();
  }
  initRoot() {
    const root = document.createElement('div');
    document.body.appendChild(root);
    this.root = root;
  }
  appendOne = (el) => {
    this.root.appendChild(el);
    this.els.push(el);
  }
  destroyOne = (el) => {
    this.root.removeChild(el);
    if (this.els.includes(el)) {
      this.els.splice(this.els.indexOf(el), 1);
    }
  }
  destroy = () => {
    const els = this.els;
    if (!els.length) {
      return;
    }
    for (const el of els) {
      this.destroyOne(el);
    }
  }
  open = ({
    message,
    description = 3000,
    onClose,
    onClick = () => {},
  }) => {
    const el = document.createElement('div');
    this.appendOne(el);
    let rendered = true;

    const s = setTimeout(() => {
      handleClose();
    }, description);

    const handleClose = () => {
      if (!rendered) {
        return;
      }
      rendered = false;
      clearTimeout(s);
      this.destroyOne(el);
      onClose && onClose();
    }


    ReactDOM.render(
      <Notice
        contaienr={el}
        message={message}
        onClick={onClick}
        onClose={handleClose}
      />,
      el
    );
  }
}

export default new Notification();