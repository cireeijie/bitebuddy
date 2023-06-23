import React, {useState} from 'react'
import "../css/community.css"
import SignupForm from './singupForm'
import LoginForm from './loginForm'

const Community = () => {
    const [ openSignupForm, setOpenSignupForm ] = useState(false)
    const [ openLoginForm, setOpenLoginForm ] = useState(false)

    const handleSignup = () => {
        setOpenSignupForm(true)
    }

    return (
        <div className='community'>
            <div className='community-text'>
                <h2>Join the <span>BiteBuddy</span> Community</h2>
                <p>List Your Restaurant, Expand Your Reach</p>
                <button onClick={handleSignup}>Join Now</button>
                <SignupForm 
                    openSignup = {openSignupForm} 
                    closeSignup = {() => {
                        setOpenSignupForm(false)
                    }}
                    toLogin = {() => {
                        setOpenSignupForm(false)
                        setOpenLoginForm(true)
                    }}
                />
                <LoginForm 
                    openLogin = {openLoginForm} 
                    closeLogin = {() => {
                        setOpenLoginForm(false)
                    }}
                    toSignUp = {() => {
                        setOpenLoginForm(false)
                        setOpenSignupForm(true)
                    }}
                />
            </div>
        </div>
    )
}

export default Community
