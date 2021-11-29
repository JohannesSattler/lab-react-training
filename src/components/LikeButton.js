import React from 'react'

function LikeButton() {
    const [number, setNumber] = React.useState(0)
    const backgrounds = ['purple','blue','green','yellow','orange','red']
    const currentBckgrd = Math.floor(Math.random() * backgrounds.length)

    return (
        <>
            <button 
                id="counterbut" 
                style={{backgroundColor: backgrounds[currentBckgrd], height: '50px', width: '100px'}} 
                onClick={() => setNumber(number+1)}
            >
                {number} likes
            </button>
        </>
    )
}

export default LikeButton
