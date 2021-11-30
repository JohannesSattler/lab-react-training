import {useState, useEffect} from 'react'

function Dice() {
    const [dice, setDice] = useState('./assets/images/dice-empty.png')
    const dices = [
        './assets/images/dice1.png', 
        './assets/images/dice2.png', 
        './assets/images/dice3.png', 
        './assets/images/dice4.png', 
        './assets/images/dice5.png',
        './assets/images/dice6.png'
    ];

    const showEmptyDice = () => {
        setDice('./assets/images/dice-empty.png')
    }

    const showRandomDice = () => {
        const index = Math.floor(Math.random() * dices.length)
        setDice(dices[index])
    }

    
    useEffect(() => {
        const timeOutID = setTimeout(() => {
            showRandomDice()
            return () => {
                clearTimeout(timeOutID)
            }
        }, 1000);
    }, [])

    const handleDiceClick = () => {
        showEmptyDice()
        const diceTimeOut = setTimeout(() => {
            showRandomDice()
            clearTimeout(diceTimeOut)
        }, 1000);
    }

    return (
        <>
            <img src={dice} alt="" onClick={handleDiceClick}></img> 
        </>
    )
}

export default Dice
