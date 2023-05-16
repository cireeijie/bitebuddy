import "../css/navbar.css"
import logo from "../images/bb-logo 1.png";
import { NavLink } from "react-router-dom"



const Navbar = () => {
    return (
        <header className='navbar-section'>
            <img src={logo} alt="logo"/>
            <ul className='navlist'>
                <NavLink to="/" className="nav-items">Home</NavLink>
                <NavLink to="/about" className="nav-items">About</NavLink>
                <NavLink to="findYourNextBite" className="nav-items">Find Your Next Bite</NavLink>
                <NavLink to="/contact" className="nav-items">Contact</NavLink>
                <NavLink to="/findYourNextBite"><button>Bite Now</button></NavLink>
                <span>+</span>
            </ul>
        </header>
    )
}

export default Navbar