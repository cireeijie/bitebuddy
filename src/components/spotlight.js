import React from 'react';
import "../css/spotlight.css"
import vikingsLogo from "../images/image 2.png"
import { FaFacebookF, FaInstagram, FaGlobeAmericas } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Spotlight = () => {
    return (
        <div className='spotlight'>
            <div className='spotlight-row-container'>
                <div className='spotlight-top'>
                    <span><span className='highlight'>Spotlight</span> on Dining</span>
                    <span className='tag'>Where great dining takes center stage</span>
                </div>
                <div className='spotlight-container' data-aos="fade-up" data-aos-duration="2000">
                    <div className='vikings-buffet'>
                        <div className='vikings-buffet-img'>
                            <img src={vikingsLogo} alt='Vikings'/>
                        </div>
                        <div className='vikings-buffet-text'>
                            <span className='vikings-buffet-text-title'>Vikings Luxury Buffet</span>
                            <span className='vikings-buffet-text-desc'>Vikings is the absolute best buffet experience in the country, featuring a cornucopia of flavors that can't be found elsewhere. Gather up your friends and family and embark on your greatest food adventure yet. Be merry, eat hearty, and eat like a Viking today!</span>
                            <div className='vikings-buffet-socials'>
                                <FaFacebookF className='buffet-socials-item'/>
                                <FaInstagram className='buffet-socials-item'/>
                                <FaGlobeAmericas className='buffet-socials-item'/>
                            </div>
                            <button>Reserve a Table</button>
                        </div>
                    </div>
                    <div className='vikings-main-img'></div>
                </div>
                <div className='spotlight-button'>
                    <Link to='/find-your-next-bite'>
                        <button>Find Your Next Bite</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Spotlight
