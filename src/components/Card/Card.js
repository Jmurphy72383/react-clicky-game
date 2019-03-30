import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-div">
        <img alt='' src={props.image} onClick={props.shuffleObject} id={props.id}/>
    </div>
);

export default Card;