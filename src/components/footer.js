import React from 'react';
import "../css/footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <span className='footer-copyright'>Copyright© 2023 | BiteBuddy</span>
            <span className='footer-socials'>
                <FaFacebookF className='socials-items'/>
                <FaInstagram className='socials-items'/>
                <FaLinkedinIn className='socials-items'/>
            </span>
            <span className='footer-powered'>Powered by Group 9 of WD54</span>
        </div>
    )
}

export default Footer
