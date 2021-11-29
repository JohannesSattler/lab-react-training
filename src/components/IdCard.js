import React from 'react'

function IdCard(props) {
    console.log(props)
    const { 
        lastName, 
        firstName, 
        gender, 
        height, 
        birth, 
        picture 
    } = props;

    return (
        <>
            <img src={picture} alt=""></img>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toLocaleDateString()}</p>
        </>
    )
}

export default IdCard;