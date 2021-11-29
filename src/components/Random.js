import React from 'react'

function Random(props) {
    const {min, max} = props
    const result = Math.floor(Math.random() * (max - min) + min) 

    return (
        <>
           <h2>Random value between {min} and {max} ={'>'} {result}</h2> 
        </>
    )
}

export default Random
