import React from 'react';
import "../css/findNextBiteContent.css";
import cardLogo1 from "../images/Logo.png";
import cardLogo2 from "../images/Logo (1).png";
import cardLogo3 from "../images/Logo (2).png";
import { FaMapMarkerAlt, FaClock, FaChair} from "react-icons/fa";

const FindNextBiteContent = () => {
    return (
        <div className='find-next-bite-content'>
            <div className='next-bite-title'>
                <span>Find Your Next Bite</span>
                <span>Discover delicious possibilities with every click.</span>
            </div>
            <div className='next-bite-cards'>
                {/* 1st Card */}
                <div className='next-bite-card'>
                    <div className='card-image-1'></div>
                    <div className='card-desc'>
                        <div className='card-desc-logo'>
                            <img src={cardLogo1}/>
                        </div>
                        <div className='card-desc-text'>
                            <span className='title'>Vikings Luxury Buffet</span>
                            <div className='card-desc-reps'>
                                <div className='card-desc-reps-item'>
                                    <FaMapMarkerAlt className='desc-reps-item'/>
                                    <span>GXRH+FWC By the Bay, MOA Complex, Building B, Bldg B Seaside Blvd, Pasay, 1300 Metro Manila</span>
                                </div>
                                <div className='card-desc-reps-item'>
                                    <FaClock className='desc-reps-item'/>
                                    <span>8:00am - 8:00pm (Mon - Sunday)</span>
                                </div>
                                <div className='card-desc-reps-item'>
                                    <FaChair className='desc-reps-item'/>
                                    <span>20</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='card-buttons'>
                        <button>More Info</button>
                        <button>Reserve Now</button>
                    </div>
                </div>
                {/* 2nd Card */}
                <div className='next-bite-card'>
                    <div className='card-image-2'></div>
                    <div className='card-desc'>
                        <div className='card-desc-logo'>
                            <img src={cardLogo2}/>
                        </div>
                        <div className='card-desc-text'>
                            <span className='title'>Yakimix</span>
                            <div className='card-desc-reps'>
                                <div className='card-desc-reps-item'>
                                    <FaMapMarkerAlt className='desc-reps-item'/>
                                    <span>City Center, G/Floor 143 SM City North Edsa, North Avenue, Metro Manila, Quezon City</span>
                                </div>
                                <div className='card-desc-reps-item'>
                                    <FaClock className='desc-reps-item'/>
                                    <span>8:00am - 8:00pm (Mon - Sunday)</span>
                                </div>
                                <div className='card-desc-reps-item'>
                                    <FaChair className='desc-reps-item'/>
                                    <span>25</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='card-buttons'>
                        <button>More Info</button>
                        <button>Reserve Now</button>
                    </div>
                </div>

                {/* 3rd Card */}
                <div className='next-bite-card'>
                    <div className='card-image-3'></div>
                    <div className='card-desc'>
                        <div className='card-desc-logo'>
                            <img src={cardLogo3}/>
                        </div>
                        <div className='card-desc-text'>
                            <span className='title'>Tong Yang</span>
                            <div className='card-desc-reps'>
                                <div className='card-desc-reps-item'>
                                    <FaMapMarkerAlt className='desc-reps-item'/>
                                    <span>SM City, Tirona Hwy, Bacoor, 4102 Cavite</span>
                                </div>
                                <div className='card-desc-reps-item'>
                                    <FaClock className='desc-reps-item'/>
                                    <span>8:00am - 8:00pm (Mon - Sunday)</span>
                                </div>
                                <div className='card-desc-reps-item'>
                                    <FaChair className='desc-reps-item'/>
                                    <span>20</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='card-buttons'>
                        <button>More Info</button>
                        <button>Reserve Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindNextBiteContent
