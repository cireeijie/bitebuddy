import { FaMapMarkerAlt, FaClock, FaChair} from "react-icons/fa";
import '../css/findNextBiteCard.css'

const FindNextBiteCard = ({id, name, logo, featImg, time, location, seats, openReserveForm, verifyUser, openLoginForm}) => {

    return (
        <div className="card-container" id={id} data-aos="fade-up" data-aos-duration="1000">
            <div className="image-holder">
                <img src={featImg} alt={name} />
            </div>
            <div className="card-content">
                <div className="card-info">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="info">
                        <p className="title">{name}</p>
                        <div className="locations">
                            <div className="icon">
                                <FaMapMarkerAlt className='desc-reps-item'/>
                            </div>
                            <span className="location">{location}</span>
                        </div>
                        <div className="open-hours">
                            <div className="icon">
                                <FaClock className='desc-reps-item'/>
                            </div>
                            <span className="hours">{time}</span>
                        </div>
                        <div className="seats">
                            <div className="icon">
                                <FaChair className='desc-reps-item'/>
                            </div>
                            <span className="total-seats">{seats}</span>
                        </div>
                    </div>
                </div>
                <div className="action-btns">
                    <button className="more-info" id={id} onClick={verifyUser ? openReserveForm : openLoginForm}>More Info</button>
                    <button className="reserve-now" id={id} onClick={verifyUser ? openReserveForm : openLoginForm}>Reserve Now</button>
                </div>
            </div>
        </div>
    )
}

export default FindNextBiteCard