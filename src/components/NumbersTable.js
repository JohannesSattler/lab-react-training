import React from 'react'

function NumbersTable(props) {
    return (
        <>
            <ul>
                {Array.apply(null, Array(props.limit)).map((item, index) => {
                        const background = index % 2 === 0 ? 'red' : 'white'
                        return (
                            <li key={index} style={{backgroundColor: background, height: '50px', width: '100px'}} >
                                <h3>{index}</h3>
                            </li>
                        )
                })}
            </ul>
        </>
    )
}

export default NumbersTable
