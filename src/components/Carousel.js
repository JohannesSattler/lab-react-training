import {useState} from 'react'

function Carousel(props) {
    const [index, setIndex] = useState(0)
    const {imgs} = props

    const handleNextPicClick = () => {
        if(index >= imgs.length-1) {
            setIndex(index)
            return;
        }
        setIndex(index+1)
    }

    const handlePrevPicClick = () => {
        if(index <= 0) {
            setIndex(index)
            return;
        }
        setIndex(index-1)
    }

    return (
        <>
           <img src={imgs[index]} alt=""></img>  
           <button 
                style={{height: '50px', width: '100px'}} 
                onClick={handlePrevPicClick}
            >
                Prev Pic
            </button> 
            <button 
                style={{height: '50px', width: '100px'}} 
                onClick={handleNextPicClick}
            >
                Next Pic
            </button> 
        </>
    )
}

export default Carousel
