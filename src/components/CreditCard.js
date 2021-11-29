import React from 'react'

function CreditCard(props) {
    const {
    type, 
    number, 
    expirationMonth, 
    expirationYear, 
    bank, 
    owner, 
    bgColor, 
    color
    } = props
    
    let hiddenNumber = '•'.repeat(4) + " " + '•'.repeat(4) + " " + '•'.repeat(4) + " " + number.slice(12)

    return (
        <div style={{backgroundColor: bgColor, height: '250px', color: color}}>
            <h1>{type}</h1>
            <h2>{hiddenNumber}</h2>
            <p>Expires: {expirationMonth}/{expirationYear}</p>
            <p>Owner: {owner}</p>
            <p>bank: {bank}</p>
        </div>
    )
}

export default CreditCard
