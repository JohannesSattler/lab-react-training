import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
    const {
        name,
        rating,
        img,
        car: { 
            model, 
            licensePlate
        }
    } = props;
    
    return (    
        <div>
            <img src={img} alt="" height="200"/>
            <h1>{name}</h1>
            <Rating>{rating}</Rating>
            <p>{model} - {licensePlate}</p>
        </div>
    )
}

export default DriverCard
