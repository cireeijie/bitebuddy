import React from 'react';
import "../css/contactContent.css";

const ContactContent = () => {
    return (
        <div className='conctact-content'>
            <div className='contact-content-container'>
                <div className='contact-content-title'>
                    <span>Contact Us</span>
                    <span>How can we help you today?</span>
                </div>
                <div className='contact-content-form-map'>
                    <div className='contact-content-form'>
                        <div className='contact-form-name'>
                            <label for="first-name">Name:</label>
                            <div className='name-input'>
                                <input type='text' placeholder='Firstname' className='first-name'/>
                                <input type='text' placeholder='Lastname' className='last-name'/>
                            </div>
                        </div>
                        <div className='contact-form-mail'>
                            <div className='mail-label'>
                                <label>E-mail:</label>
                                <label>Phone Number:</label>
                            </div>
                            <div className='mail-input'>
                                <input type='email' placeholder='sample@gmail.com'/>
                                <input type='text' placeholder='09xxxxxxxxx'/>
                            </div>
                        </div>
                        <div className='contact-form-message'>
                            <label>Message:</label>
                            <textarea placeholder='What are your concerns?'></textarea>
                        </div>
                        <button>Submit</button>
                    </div>
                    <div className='contact-content-map'>
                        <div className='contact-map-location'>
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61776.724777012496!2d120.93835989449073!3d14.596494687484544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1684229399727!5m2!1sen!2sph"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerPolicy='no-referrer-when-downgrade'
                            className='google-map'
                            ></iframe>
                        </div>
                        <div className='contact-map-text'>
                            <span>BiteBuddy's Contact</span>
                            <span>Contact Number: 0912-345-6780</span>
                            <span>E-mail Address: bitebuddy@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContent
