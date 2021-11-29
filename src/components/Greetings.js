import React from 'react'

function Greetings(props) {
    const { lang } = props

    const sentence = {
        'en': 'Hello',
        'de': 'Moin',
        'es': 'Hola',
        'fr': 'Bonjour',
        'pt': 'Ola'
    }

    return (
        <>  
            <h3>{sentence[lang]} {props.children}</h3>
        </>
    )
}

export default Greetings
