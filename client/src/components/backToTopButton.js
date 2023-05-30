import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

const BackToTopButton = () => {
    
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setBackToTop(true) : setBackToTop(false);
        })
    }, []);

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

    return (
        <div>
            {backToTop && (
                <button style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    fontSize: "30px",
                    border: "none",
                    backgroundColor: "transparent",
                    color: "black",
                    cursor: "pointer"
                }}
                onClick={scrollUp}
                ><FaArrowAltCircleUp/></button>
            )}
        </div>
    )
}

export default BackToTopButton
