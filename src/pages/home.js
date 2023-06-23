import Hero from '../components/hero';
import AboutSection from '../components/aboutSection';
import Spotlight from '../components/spotlight';
import Community from '../components/community';
import LoginForm from '../components/loginForm';
import Testimonial from '../components/testimonial';


const Home = () => {
    return (
        <>
            <Hero/>
            <AboutSection/>
            <Spotlight/>
            <Testimonial/>
            <Community/>
            <LoginForm />
        </>
    )
}

export default Home