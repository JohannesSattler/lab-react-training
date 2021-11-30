import {useState} from 'react'

function ClickablePicture(props) {
    const [imgIndex, setImgIndex] = useState(0)

    const images = ['./assets/images/maxence.png', './assets/images/maxence-glasses.png']

    function handleImageClick() {
        if(imgIndex >= images.length-1) {
            setImgIndex(0)
        }
        else {
            setImgIndex(imgIndex+1)
        }
    }

    return (
        <>
           <img src={images[imgIndex]} alt="" onClick={handleImageClick}></img> 
        </>
    )
}

export default ClickablePicture
