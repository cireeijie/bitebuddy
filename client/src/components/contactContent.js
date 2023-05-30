import React from 'react';
import logo from '../images/bitebuddy.png'
import "../css/contactContent.css";
import { FaEnvelope, FaMapMarkedAlt, FaMobileAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const ContactContent = () => {
    return (
        <section className='contact-content'>
            <div className='contact-row-container'>
                <div className='contact-content-title'>
                    <span>Contact Us</span>
                    <span>How can we help you today?</span>
                </div>
                <div className='contact-section'>
                    <div className='contact-form'>
                        <form action='#' method='#'>
                            <span>Send a Message</span>
                            <div className='inputs-container'>
                                <input type='text' placeholder='Your Full Name'/>
                                <input type='text' placeholder='Your Email'/>
                                <input type='text' placeholder='Subject'/>
                                <textarea placeholder='Your Message'></textarea>
                                <input type='button' value="Submit" className='form-button' />
                            </div>
                        </form>
                    </div>
                    <div className='contact-info'>
                        <div className='contact-logo'>
                            <img src={logo} alt='bitebuddy logo'/>
                        </div>
                        <div className='contact-info-title'>
                            <span>Other Contact Information:</span>
                        </div>
                        <div className='contact-container'>
                            <span className='contact-title'>Email Us</span>
                            <div className='contact-text'>
                                <FaEnvelope className='logo'/>
                                <div className='creds'>
                                    <span>info@bitebuddy.com</span>
                                    <span>support@bitebuddy.com</span>
                                </div>
                            </div>
                        </div>
                        <div className='contact-container'>
                            <span className='contact-title'>Visit Us</span>
                            <div className='contact-text'>
                                <FaMapMarkedAlt className='logo'/>
                                <div className='creds'>
                                    <span>Somehere, Manila, Philippines</span>
                                </div>
                            </div>
                        </div>
                        <div className='contact-container'>
                            <span className='contact-title'>Call Us</span>
                            <div className='contact-text'>
                                <FaMobileAlt className='logo'/>
                                <div className='creds'>
                                    <span>Phone: 0912-234-6789</span>
                                    <span>Phone: 0998-532-1234</span>
                                </div>
                            </div>
                        </div>
                        <div className='contact-container'>
                            <span className='contact-title'>Follow us on our socials</span>
                            <div className='contact-text'>
                                <div className='social-icons'>
                                    <FaFacebookF className='social-icon' />
                                    <FaInstagram className='social-icon' />
                                    <FaLinkedinIn className='social-icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactContent
