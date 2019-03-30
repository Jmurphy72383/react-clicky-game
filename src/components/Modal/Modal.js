import React from 'react';
import './Modal.css';

const Modal = (props) => (
    <div className="modal-div">
        <h1>Better Luck Next Time!</h1>
        <img src="https://media1.tenor.com/images/b75b0c9ca2c071c670bca23c7ed06f10/tenor.gif?itemid=4927079" alt="loser"></img>
        <div className="btn-div">
            <button onClick={props.resetGameHandler}>Play Again</button>
        </div>
        
    </div>
);

export default Modal;