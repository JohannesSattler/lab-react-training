import React, {useState} from 'react'


function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [greeting, setGreeting] = useState('Hello')
    
    const [checkEmail, setCheckEmail] = useState(true)
    const [checkPassword, setCheckPassword] = useState(true)

    const checkThisEmail = () => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        const emailValid = email.match(emailRegex)
        setCheckEmail(emailValid)
    }

    const checkThisPassword = () => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const passwordValid = password.match(passwordRegex)
        setCheckPassword(passwordValid)
    }

    const handleEmailChange = (event) => {
        const emailValue = event.currentTarget.value
        setEmail(emailValue)
        checkThisEmail()
    }

    const handlePasswordChange = (event) => {
        const passwordValue = event.currentTarget.value
        setPassword(passwordValue)
        checkThisPassword()
    }

    const handleNationalityChange = (event) => {
        const selectedLang = event.currentTarget.value;
        const greetConvert = {
            'en': 'Hello',
            'de': 'Guten Tag',
            'fr': 'Bonjour',
        }

        setGreeting(greetConvert[selectedLang])
    }

    const handleSubmitClick = (event) => {
        event.preventDefault()
        checkThisEmail()
        checkThisPassword()
    }

    return (
        <>
            <form onSubmit={handleSubmitClick}>
                <label htmlFor="email">Email:</label>
                <input 
                type="text" 
                id="email" 
                name="email" 
                onChange={handleEmailChange}
                style={{border: checkEmail ? '2px solid green' : '2px solid red'}}
                />
                <p style={{display: checkEmail ? 'none' : 'inline', color: 'tomato'}}>
                    Email is not valid
                </p>
                <br/><br/>
                
                <label htmlFor="password">Password:</label>
                <input 
                type="text" 
                id="password" 
                name="password" 
                onChange={handlePasswordChange}
                style={{border: checkPassword ? '2px solid green' : '2px solid red'}}
                />
                <p style={{display: checkPassword ? 'none' : 'inline', color: 'tomato'}}>
                    Password is not valid
                </p>
                <br/><br/>

                <label htmlFor="nationality">Nationality:</label>
                <select id="nationality" name="nationality" onChange={handleNationalityChange}>
                    <option value="en">English</option>
                    <option value="de">Germany</option>
                    <option value="fr">French</option>
                </select>
                <br/><br/>

                <p>{greeting}</p>
                <p>Your email is: {email}</p>
                <p>Your Password is: {password}</p>

                <button>Submit</button>
            </form>
        </>
    )
}

export default SignupPage
