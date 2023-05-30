import React from 'react';
import "../css/aboutAwards.css";

const AboutAwards = () => {
    return (
        <section className='about-awards' data-aos="fade-right">
            <div className='about-awards-title'>
                <h1>Awards and Recognition</h1>
            </div>
            <div className='about-awards-desc'>
                <span>
                    Bitebuddy has been honored with multiple prestigious awards and accolades, recognizing our commitment to booking excellence, creativity, and exceptional service. These recognitions inspire us to continually surpass expectations and create extraordinary experiences for our valued customers.
                </span>
            </div>
            <div className='about-awards-value'>
                <div className='partnered'>
                    <span className='value'>3</span>
                    <span className='description'>Partnered with 3 very well-known restaurants</span>
                </div>
                <div className='awards'>
                    <span className='value'>10</span>
                    <span className='description'>Already received 10 awards</span>
                </div>
                <div className='trustworthy'>
                    <span className='value'>S</span>
                    <span className='description'>Have a very trustworthy reputation according to Google</span>
                </div>
            </div>
        </section>
    )
}

export default AboutAwards
