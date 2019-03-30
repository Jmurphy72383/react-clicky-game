import React from 'react';
import './WinModal.css';

const WinModal = (props) => (
    <div className="modal-div">
        <h1>Winner!</h1>
        <img src="https://media0.giphy.com/media/xUOxfg0ESyhKOv4Vva/giphy.gif" alt="victory"></img>
        <div className="btn-div">
            <button onClick={props.resetGameHandler}>Play Again</button>
        </div>
        
    </div>
);

export default WinModal;