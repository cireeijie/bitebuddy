import "../css/navbar.css"
import logo from "../images/bb-logo 1.png";
import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <header className='navbar-section'>
            <img src={logo} alt="logo"/>
            <ul className='navlist'>
                <Link to="/" className="nav-items">Home</Link>
                <Link to="/about" className="nav-items">About</Link>
                <Link to="findYourNextBite" className="nav-items">Find Your Next Bite</Link>
                <Link to="/contact" className="nav-items">Contact</Link>
                <button>Bite Now</button>
                <span>+</span>
            </ul>
        </header>
    )
}

export default Navbar