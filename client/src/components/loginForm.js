import React, {useState} from "react"
import "../css/loginForm.css"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

const LoginForm = ({openLogin, closeLogin, toSignUp}) => {
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const navigate = useNavigate()

    const server = {
        host: 'http://13.236.165.58:3001',
        login: '/login'
    }

    const checkUser = {
        userEmail: email,
        userPass: password
    }

    axios.defaults.withCredentials = true
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password) {
            axios.post(`${server.host}${server.login}`, checkUser)
            .then(response => {
                if(response.data.Status === 'Success') {
                    alert('Login success!')
                    navigate('/user-page')
                    window.location.reload(true)
                }
                else {
                    alert(response.data.Message)
                }
            })
        }
        else {
            if(!email && !password) {
                alert("Please enter your email and password.")
            }
            else if(email == '') {
                alert('Please enter your email')
            }
            else (
                alert('Please enter your password')
            )
        }
    }

    if(!openLogin) return null
    return (
        <section className="login-modal">
            <div className="close-modal" onClick={closeLogin}></div>
            <div className="login-form">
                <form>
                    <h1>Securing Your Plate</h1>
                    <span>The Importance of Logging In Before Eating</span>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <a href="#">Forgot password?</a>
                    <button className="login-btn" onClick={handleSubmit}>Login</button>
                    <p>Don't have an acount? <a onClick={toSignUp}>Signup</a></p>
                </form>
            </div>
        </section>
    )
}

export default LoginForm