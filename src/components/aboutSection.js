import "../css/aboutSection.css"
import aboutPic from "../images/image 4.png";

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-pic">
                <img src={aboutPic} alt="About Pic"/>
            </div>
            <div className="about-context">
                <span className="about-us">About Us</span>
                <span className="about-connecting">Connecting You to Your Next Bite</span>

                <div className="about-info">
                    <span>At BiteBuddy, we believe that dining should be an enjoyable and stress-free experience for everyone. That's why we've created a platform that connects diners with the best restaurants in town, making it easy for them to discover new places, reserve tables, and earn rewards.</span>
                    <button>More Info</button>
                </div>
            </div>
        </section>
    )
}
export default AboutSection
