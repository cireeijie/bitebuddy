import "../css/hero.css"
import { Link } from "react-router-dom"
import SignupForm from "./singupForm"
import LoginForm from "./loginForm"
import { useState } from "react"

const Hero = () => {
    const [ openSignupForm, setOpenSignupForm ] = useState(false)
    const [ openLoginForm, setOpenLoginForm ] = useState(false)

    const handleSignup = () => {
        setOpenSignupForm(true)
    }

    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className='hero-context' >
                    <h2>Welcome to <span className='bite-buddy'>BiteBuddy!</span></h2>
                    <p>Sign up now and receive a special offer on your first reservation with BiteBuddy. Don't miss out on this tasty opportunity!</p>
                    <div className="hero-buttons">
                        <Link to="/about"><button>About Us</button></Link>
                        <button onClick={handleSignup}>Sign Up</button>
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
            </div>
        </section>
    )
}
export default Hero
