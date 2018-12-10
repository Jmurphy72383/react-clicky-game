import React from 'react';
import './Score.css'

const Score = (props) => (
    <div className="score-div">
        <h3 className="score-h3">Score: {props.score} </h3>
        <h3 className="score-h3">Top Score: {props.topScore} </h3>
    </div>
);

export default Score;