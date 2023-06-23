import React from 'react';
import "../css/contactGetTouch.css";
import { FaEnvelope, FaMapMarkedAlt, FaMobileAlt } from "react-icons/fa";

const ContactGetTouch = () => {
    return (
        <section className='get-in-touch' data-aos="fade-right">
            <div className='mail'>
                <div className='icon'>
                    <span><FaEnvelope/></span>
                </div>
                <div className='text'>
                    <span>bitebuddy@gmail.com</span>
                    <span>support@bitebuddy@gmail.com</span>
                </div>
                
            </div>
            <div className='mail'>
                <div className='icon'>
                    <span><FaMapMarkedAlt/></span>
                </div>
                <div className='text'>
                    <span>1234, Manila, Philippines</span>
                </div>
                
            </div>
            <div className='mail'>
                <div className='icon'>
                    <span><FaMobileAlt/></span>
                </div>
                <div className='text'>
                    <span>Phone: 0912-234-6789</span>
                    <span>Phone: 0998-532-1234</span>
                </div>
            </div>
        </section>
    )
}

export default ContactGetTouch
