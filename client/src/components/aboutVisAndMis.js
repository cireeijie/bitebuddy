import React from 'react';
import "../css/aboutVisAndMis.css";
import { GiBinoculars } from "react-icons/gi";
import { FaSmileBeam } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";

const AboutVisAndMis = () => {
    return (
        <section className='vis-and-mis' data-aos="fade-right">
            <div className='vis-mis-container'>
                <div className='vis-container'>
                    <div className='vmg-icon'>
                        <GiBinoculars />
                    </div>
                    <div className='vis-title'>
                        <span>Vision</span>
                    </div>
                    <div className='vis-desc'>
                        <span>We envision BiteBuddy as booking destination where flavors, artistry, and heartfelt service converge to create extraordinary moments. We aim to be recognized as a beacon of booking excellence, constantly innovating and delighting our guests with inspired dishes that reflect our commitment to quality and creativity.</span>
                    </div>
                </div>
                <div className='goal-container'>
                    <div className='vmg-icon'>
                        <GiStairsGoal />
                    </div>
                    <div className='goal-title'>
                        <span>Goals</span>
                    </div>
                    <div className='goal-desc'>
                        <ul>
                            <li>Provide an exceptional dining experience</li>
                            <li>Build and nurture a loyal customer base</li>
                            <li>Cultivate partnerships with local suppliers and producers</li>
                            <li>Contribute to the community</li>
                            <li>Continuously improve guest satisfaction</li>
                        </ul>
                    </div>
                </div>
                <div className='mission-container'>
                <div className='vmg-icon'>
                        <FaSmileBeam />
                    </div>
                    <div className='mission-title'>
                        <span>Mission</span>
                    </div>
                    <div className='mission-desc'>
                        <span>Our mission is to provide a remarkable booking experience that captivates the senses, fosters connection, and creates cherished memories. We strive to exceed our guests' expectations by offering exceptional cuisine, warm hospitality, and an inviting atmosphere that embodies the essence of our culinary vision.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutVisAndMis
