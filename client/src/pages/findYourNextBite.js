import FindNextBiteHero from "../components/findNextBiteHero";
import Community from "../components/community";
import FindNextBiteContent from "../components/findNextBiteContent";

const FindYourNextBite = ({currentUser}) => {
    const user = currentUser
    
    return (
        <>
        <FindNextBiteHero/>
        <FindNextBiteContent currentUser = {user}/>
        <Community/>
        </>
    )
}
export default FindYourNextBite