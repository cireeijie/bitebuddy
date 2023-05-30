import React from 'react';
import "../css/contactHero.css";

const ContactHero = () => {
    return (
        <div className='contact-hero'>
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61776.724777012496!2d120.93835989449073!3d14.596494687484544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1684229399727!5m2!1sen!2sph"
                    style={{ border: "0" }}
                    loading="lazy"
                    referrerPolicy='no-referrer-when-downgrade'
                    className='google-map'
                    ></iframe>
        </div>
    )
}

export default ContactHero
