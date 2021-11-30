import {useState, useEffect} from 'react'

function LikeButton() {
    const [number, setNumber] = useState(0)
    const [index, setIndex] = useState(0)
    const backgrounds = ['purple','blue','green','yellow','orange','red']

    useEffect(() => {
        if(index >= backgrounds.length) {
            setIndex(0)
        }
    }, [index, backgrounds])

    const handleLikeClick = () => {
        setIndex(index + 1)
        setNumber(number + 1)
    }

    return (
        <>
            <button 
                id="counterbut" 
                style={{backgroundColor: backgrounds[index], height: '50px', width: '100px'}} 
                onClick={handleLikeClick}
            >
                {number} likes
            </button>
        </>
    )
}

export default LikeButton
