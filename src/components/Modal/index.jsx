import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const Modal = (props) => {
  if (props.isOpen)
    return ReactDOM.createPortal(
      <div className="modalOverlay">
        <div className="modalContent">
          <button className="modalCloseButton" onClick={props.onClose}>
            X
          </button>
          {props.children}
        </div>
      </div>,
      document.getElementById('root')
    )
  return null
}

export default Modal