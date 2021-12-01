import {useState} from 'react'
import profilesData from '../data/berlin.json';

function Facebook() {
    const [profiles, setProfiles] = useState([...profilesData])

    // create array of all countrys
    const allCountrys = {}
    profiles.forEach(profile => {
        if(!allCountrys[profile.country]) {
            allCountrys[profile.country] = 1
        }
    })


    function handleCityClick(event) {
        const selectedCountry = event.currentTarget.value

        const newProfile = profiles.map(profile => {
            if(profile.country === selectedCountry) {
                profile.highlight = true;
            }
            else {
                profile.highlight = false;
            }

            return profile;
        })

        setProfiles(newProfile)
    }

    return (
        <>
            <select onChange={handleCityClick}>
                <option>All</option>
                {
                    // create option for all countrys
                    Object.keys(allCountrys).map(country => {
                        return <option key={country}>{country}</option>
                    })
                }
                
            </select>
            {profiles.map((profile, index) => {
                if(!profile.highlight) {
                    return (
                        <div key={index} style={{border: '2px solid black', width: '500px'}}>
                            <img src={profile.img} alt="" style={{border: '2px solid black', height: '50px'}}/>
                            <h3>Name: {profile.firstName} {profile.lastName}</h3>
                        </div> 
                    )
                }
                else {
                    return (
                        <div key={index} style={{backgroundColor: 'blue', border: '2px solid black', width: '500px'}}>
                            <img src={profile.img} alt="" style={{border: '2px solid black', height: '50px'}}/>
                            <h3>Name: {profile.firstName} {profile.lastName}</h3>
                            <p>Country: {profile.country}</p>
                            
                            <p>Student: {profile.isStudent ? 'Yes' : 'No'}</p>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default Facebook
