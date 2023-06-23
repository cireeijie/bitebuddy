import React from 'react';
import "../css/footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='information'>
                    <div className='visit-us'>
                        <span>LOCATION</span>
                        <span>1234, Manila, Philippines</span>
                    </div>
                    <div className='useful-links'>
                        <span>USEFUL LINKS</span>
                        <div className='link-items'>
                            <Link to="/about" className='link-item'>About Us</Link>
                            <Link to="/contact" className='link-item'>Contact Us</Link>
                            <Link className='link-item'>Reserve Now</Link>
                            <Link className='link-item'>Partnered Restaurants</Link>
                        </div>
                    </div>
                    <div className='operating-hours'>
                        <span className='title'>OPERATING HOURS</span>
                        <div className='schedule'>
                            <span>Monday to Sunday</span>
                            <span>8:00 AM - 8:00 PM</span>
                        </div>
                    </div>
                    <div className='follow-us'>
                        <span className='title'>FOLLOW US</span>
                        <div className='social-links'>
                            <span><FaFacebookF/></span>
                            <span><FaInstagram/></span>
                            <span><FaLinkedinIn/></span>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <span>Copyright© 2023 | BiteBuddy</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
