import React from 'react'

function Rating(prop) {
    const rating = Math.round(Number(prop.children))
    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating)

    return (
        <>
         <h1>{stars}</h1>
        </>
    )
}

export default Rating
