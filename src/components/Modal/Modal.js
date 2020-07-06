import React from 'react';
import "./Modal.scss";
import { useEffect } from 'react';

const Modal = ({ children, onClose, width }) => {
  let scrollHeight = 0;

  useEffect(() => {
    toggleScroll();
    return function cleanup() {
      toggleScroll();
    };
  }, [])

  function toggleScroll() {
    const body = document.body;
    if(!body.classList.contains("modal-open")){
      scrollHeight = window.pageYOffset
    }

    // window.scrollTo(0, scrollHeight)

    // console.log( document.body.scrollHeight )
    // console.log( document.body.offsetHeight )
    // console.log( document.body.clientHeight )
    console.log(window.pageYOffset)
    console.log(window)


    body.classList.toggle("modal-open");
    window.scrollTo(0, scrollHeight)
  }

  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal-backdrop" onClick={onClose}></div>
        <div className="modal-inner" style={{ width: width }}>
          <button className="close-button" onClick={onClose}>
            <svg width="16" height="16">
              <use href="./icons-sprite.svg#constructor-modal-close-icon" />
            </svg>
          </button>
          {
            children
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal;