import React from 'react'
import './modal.css'

const Modal = ({setOpenModal}) => {
  return (
    <div className='modal-background'>
        <div className='modal-container'>
            <div className='modal-closeBtn' onClick={() => setOpenModal(false)}>X</div>
            <div>ARE YOU SURE TO CONTINUE?</div>
            <div className='modal-buttons'>
                <button className='cancelBtn' onClick={() => setOpenModal(false)}>CANCEL</button>
                <button className='continueBtn'>CONTINUE</button>
            </div>
        </div>
    </div>
  )
}

export default Modal