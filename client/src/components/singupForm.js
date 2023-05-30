import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/signupForm.css'

const SignupForm = ({openSignup, closeSignup, toLogin}) => {
    const server = {
        host: 'http://localhost:3001',
        signup: '/signup',
        users: '/users'
    }

    const [ firstName, setFirstName ] = useState()
    const [ lastName, setLastName ] = useState()
    const [ userEmail, setUserEmail ] = useState()
    const [ userContact, setUserContact ] = useState()
    const [ userPassword, setUserPassword ] = useState()
    const [ existingUser, setExistingUser ] = useState()

    const userSignup = {
        firstname: firstName,
        lastname: lastName,
        email: userEmail,
        contact: userContact,
        password: userPassword
    }

    // useEffect(() => {
    //     axios.get(`${server.host}${server.users}`)
    //     .then(response => {
    //         setExistingUser(response.data.filter(user => user.email == userEmail))
    //     })
    // })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(firstName && lastName && userEmail && userContact && userPassword) {
            axios.post(`${server.host}${server.signup}`, userSignup)
            .then(response => {
                if(response.data.Status === 'Existed') {
                    alert("Email already exists")
                }
                if(response.data.Status === 'Success') {
                    alert("Registration Successful")
                    window.location.reload(true)
                }
            })
        }
        else {
            e.preventDefault()
            alert("Please fill out the form")
        }
    }

    if(!openSignup) return null
    return (
        <section className="signup-modal">
            <div className="close-modal" onClick={closeSignup}></div>
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <h1>Connect, Discover, and Delight in Foodie Paradise!"</h1>
                    <span>Elevate Your Palate, Embark on a Flavorful Voyage!</span>
                    <input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
                    <input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
                    <input type="text" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)}/>
                    <input type="text" placeholder="Contact" onChange={(e) => setUserContact(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)}/>
                    <button type="submit">Signup</button>
                    <p>Already have an acount? <a onClick={toLogin}>Login</a></p>
                </form>
            </div>
        </section>
    )
}

export default SignupForm