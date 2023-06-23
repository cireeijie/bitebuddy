import testimonials from "../testimonials";
import "../css/testimonial.css";
import { FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import React, { useEffect, useState } from 'react'

const Testimonial = () => {
    const [people] = useState(testimonials);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = testimonials.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }

        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, testimonials]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 4000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

    return (
        <section className="testimonial-section" data-aos="zoom-in" data-aos-duration="2000">
            <div className="testimonial-container">
                <div className="testimonial-title">
                    <span>Delighting Palates, Enchanting Smiles: BiteBuddy Happy Customers</span>
                    <span>Savor the Taste, Cherish the Experience!</span>
                </div>
                <div className="testimonial-carousel">
                    {people.map((person, indexPeople) => {
                        const {id, image, name, review} = person;
                        let position = "nextSlide";
                        if (indexPeople === index) {
                            position = "activeSlide";
                        }
                        if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
                            position ="lastSlide";
                        }
                        return (
                            <article className={position} id="carousel" key={id}>
                                    <div className="testimonial-image-container">
                                        <img src={image}/>
                                    </div>
                                    <div className="rating">
                                        <FaStar className="rating-items"/>
                                        <FaStar className="rating-items"/>
                                        <FaStar className="rating-items"/>
                                        <FaStar className="rating-items"/>
                                        <FaStar className="rating-items"/>
                                    </div>
                                    <div className="review">
                                        <span>"{review}"</span>    
                                    </div> 
                                    <div className="name">
                                        <span>-{name}</span>    
                                    </div>     
                            </article>
                        )
                    })}
                    
                    <button 
                    className="prev"
                    onClick={() => setIndex((prev) => prev -1)}>
                        <FaArrowLeft/>
                    </button>
                    <button className="next" onClick={() => setIndex((prev) => prev + 1)}><FaArrowRight/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
