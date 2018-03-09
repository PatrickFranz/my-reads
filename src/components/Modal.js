import React from 'react'

const Modal = (props) => {
  return(
    <div className="modal">
      <div className="modal-heading">
        <span className="modal-title">{props.title}</span>
      </div>
      <div className="modal-message-block">
        <span className="modal-message-text">{props.msg}</span> 
      </div>
      <div className="modal-button-bar">
        <button className="modal-close">{props.buttonMsg}</button>
      </div>
    </div>
  )
}

export default Modal;