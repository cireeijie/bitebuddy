import "../css/hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="hero-section">
            <div className='hero-context'>
                <h2>Welcome to <span className='bite-buddy'>BiteBuddy!</span></h2>
                <p>Sign up now and receive a special offer on your first reservation with BiteBuddy. Don't miss out on this tasty opportunity!</p>
                <div className="hero-buttons">
                    <Link to="/about"><button>About Us</button></Link>
                    <button>Sign Up</button>
                </div>
            </div>
        </section>
    )
}
export default Hero
