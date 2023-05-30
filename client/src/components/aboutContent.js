import React from 'react';
import "../css/aboutContent.css";
import aboutContentPhoto from "../images/about-us.jpg"


const AboutContent = () => {
    return (
        <div className='about-content'>
            <div className='about-content-text'>
                <div className='about-content-title'>
                    <span>About Us</span>
                    <span>Connecting You to Your Next Bite</span>
                </div>
                <div className='about-content-infomation'>
                    <div className='about-content-desc'>
                        <span>At BiteBuddy, we believe that dining should be an enjoyable and stress-free experience for everyone. That's why we've created a platform that connects diners with the best restaurants in town, making it easy for them to discover new places, reserve tables, and earn rewards.
                        </span><br/><br/>
                        <span data-aos="fade-right">
                            Our team is passionate about food, and we understand the importance of finding the perfect dining spot for any occasion. Whether you're looking for a romantic dinner, a family gathering, or a night out with friends, we've got you covered. Our platform offers a wide range of dining options to suit every taste and budget, from cozy cafes to upscale restaurants.
                        </span><br/><br/>
                        <span data-aos="fade-right">With BiteBuddy, you can skip the hassle of making reservations and waiting in line. Our easy-to-use platform allows you to search for restaurants, compare prices and menus, and book a table in seconds. Plus, you can earn rewards for every reservation you make, which can be redeemed for discounts on your next meal.
                        </span><br/><br/>
                        <span data-aos="fade-right">
                            We're committed to providing our users with a seamless and enjoyable dining experience. If you have any questions or feedback, please don't hesitate to get in touch with us. We're here to help you make the most of your dining experience, every time.
                        </span>
                    </div>
                    <div className='about-content-image'>
                        <div className="clip-shape"></div>
                        <img src={aboutContentPhoto} alt='Content'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
