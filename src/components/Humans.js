import React from 'react'
import people from '../data/people.json'

function Humans() {
    function handleDeleteClick(id) {

    }

    return (
        <div>
            <h1>List of Humans</h1>
            {
                people.map(person => {
                    return (
                        <div key={person.id}>
                            {person.name}
                            <button onClick={() => handleDeleteClick(person.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Humans
