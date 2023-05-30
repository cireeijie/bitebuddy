import "../css/navbar.css"
import { NavLink } from "react-router-dom"
import LoginForm from "./loginForm";
import { useEffect, useState } from "react";
import axios from "axios";
import SignupForm from "./singupForm";
import { FaSortDown, FaUserCircle, FaUserAlt, FaUpload, FaEdit, FaBell } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';


const Navbar = ({isVerified, currentUser}) => {
    const [ openLoginForm, setOpenLoginForm ] = useState(false)
    const [ userDropdown, setUserDropdown ] = useState(false)
    const [ openSignupForm, setOpenSignupForm ] = useState(false)
    const user = currentUser

    const server = {
        host: "http://localhost:3001",
        loggedInUser: "/user/login-status",
        image: '/images/',
        logout: '/logout'
    }

    const handleLogin = () => {
        if(!isVerified) {
            setOpenLoginForm(true)
        }
    }

    const handleLogout = () => {
        axios.get(`${server.host}${server.logout}`)
        .then(response => {
            if(response.data.Status === 'Logged out') {
                alert('You are logged out.')
                window.scrollTo({top: 0, behavior: 'smooth'})
                window.location.reload(true)
            }
            else {
                alert('Error')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    window.addEventListener('scroll', () => {
        const navlist = document.querySelector(".navbar-container .navlist")
        navlist.classList.toggle('adjust', window.scrollY > 0)
    })

    return (
        <header className='navbar-section'>
            <div className="navbar-container">
                <NavLink to='/'>
                    <img className="logo" src={server.host+server.image+"bitebuddy.png"} alt="logo"/>
                </NavLink>
                <ul className='navlist'>
                    {
                        isVerified ? 
                        <>
                            <NavLink to="/" className="nav-items" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Home</NavLink>
                            <NavLink to="/about" className="nav-items" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>About</NavLink>
                            <NavLink to="/find-your-next-bite" className="nav-items" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Find Your Next Bite</NavLink>
                            <NavLink to="/contact" className="nav-items" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Contact</NavLink>
                            <div className='user-section'>
                                <div className="user-name">
                                    <span className="user">Hi, <span className="firstname">{user.firstName}</span></span>
                                </div>
                                <div 
                                    className="user-detail"
                                    onClick={() => 
                                        !userDropdown ? setUserDropdown(true) : setUserDropdown(false)
                                    }
                                >
                                    <div className="user-button">
                                        <button className='drop-down'>
                                            <FaSortDown className={!userDropdown ? 'sort-down' : 'sort-up'}/>
                                        </button>
                                        <div className='profile-container'>
                                            <FaUserCircle className='user-profile'/>
                                        </div>
                                    </div>
                                    <div 
                                        className="user-options"
                                        style={{display: `${!userDropdown ? "none" : "flex"}`}}
                                    >
                                        <NavLink to='/user-page'>
                                            <div className='user-option'>
                                                <FaUserCircle className='dropdown-logo'/>
                                                <span>Profile</span>
                                            </div>
                                        </NavLink>
                                        <div className='user-option'>
                                            <FiSettings className='dropdown-logo'/>
                                            <span>Settings</span>
                                        </div>
                                        <div className='user-option'>
                                            <FaBell className='dropdown-logo'/>
                                            <span>Notifications</span>
                                        </div>
                                        <NavLink to="/" className='user-option' onClick={handleLogout}>
                                            <FiLogOut className='dropdown-logo'/>
                                            <span>Logout</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <NavLink to="/" className="nav-items" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Home</NavLink>
                            <NavLink to="/about" className="nav-items" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>About</NavLink>
                            <NavLink to="/find-your-next-bite" className="nav-items" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Find Your Next Bite</NavLink>
                            <NavLink to="/contact" className="nav-items" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Contact</NavLink>
                            <button onClick={handleLogin}>Bite Now</button>
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
                        </>
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar