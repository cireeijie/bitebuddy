import React, { useEffect, useState } from 'react';
import "../css/userPage.css";
import { FaSortDown, FaUserCircle, FaUserAlt, FaUpload, FaEdit, FaBell, FaSave} from 'react-icons/fa';
import UploadImage from '../components/uploadImage';
import ReservationHistory from '../components/reservationHistory';
import NoHistory from '../components/noHistory';
import forbidden from '../images/forbidden.jpg'

const UserPage = ({currentUser, reserves, updateUser, errMessage, isVerified}) => {
    const user = currentUser
    const [ openUploadForm, setOpenUploadForm ] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    const server = {
        host: 'http://localhost:3001',
        image: '/images/'
    }

    const noHistory = () => {
        const message = <tr><td>test</td></tr>
        return message
    }

    const handleUpload = () => {
        setOpenUploadForm(true)
    }

    return (
        <>
            {
                !isVerified ?
                <section className='error-section'>
                    <div className='error-container'>
                        <img src={forbidden} alt='forbidden' />
                        <h1>This area is limited to logged in users only.</h1>
                        <p className='error-message'>
                            {errMessage}
                        </p>
                    </div>
                </section>
                :
                <>
                    <section className='user-row'>
                        <div className='user-container'>
                            <div className='top-section'>
                                <div className='top-info'>
                                    <div className='info-bar'></div>
                                    <span>Basic Information</span>
                                </div>
                            </div>
                            <div className='bottom-section'>
                                {/* Left Side */}
                                <div className='bottom-left-side'>
                                    <div className='image-container'>
                                        {
                                            user.image ? 
                                            <img 
                                                className='user-image'
                                                src={user.image ? server.host + server.image + user.image : ''}
                                                style={
                                                    {
                                                        display: user.image ? 'block' : 'none'
                                                    }
                                                } 
                                            />
                                            : 
                                            <FaUserAlt className='image'/>
                                        }                  
                                    </div>
                                    <span>Your ID: {user.id.toString().padStart(5, '0')}</span>
                                    <button onClick={handleUpload}> <FaUpload className='upload-logo'/> UPLOAD A PHOTO</button>
                                </div>
                                {/* Right Side */}
                                <div className='bottom-right-side'>
                                    <div className='name'>
                                        <label>Name:</label>
                                        <input type='text' placeholder='Fullname' value={user ? user.firstName+" "+user.lastName : 'Fullname'} disabled={isDisabled} className={isDisabled ? "" : "shadow"}/>
                                    </div>
                                    <div className='contact-num'>
                                        <label>Contact Number:</label>
                                        <input type='text' placeholder='+6312-345-6789' value={user ? user.contact : '+6312-345-6789'} disabled={isDisabled} className={isDisabled ? "" : "shadow"}/>
                                    </div>
                                    <div className='email'>
                                        <label>Email:</label>
                                        <input type='email' placeholder='sample@gmail.com' value={user ? user.email : 'sample@gmail.com'} disabled={isDisabled} className={isDisabled ? "" : "shadow"}/>
                                    </div>
                                    <div className='points'>
                                        <label>Points:</label>
                                        <input type='number' placeholder='0' disabled={isDisabled} className={isDisabled ? "" : "shadow"}/>
                                    </div>
                                    <button onClick={() => setIsDisabled(!isDisabled)}>{isDisabled ? <FaEdit className='edit-icon'/> : <FaSave className='save-icon'/>} {isDisabled ? "Edit Profile" : "Save"}</button>
                                    <UploadImage open = {openUploadForm} close = {() => setOpenUploadForm(false)} id = {user.id} updateUser = {updateUser}/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='reservation-history'>
                        <div className='reservation-container'>
                            <div className='top-section'>
                                <div className='top-history'>
                                    <div className='history-bar'></div>
                                    <span>Reservation History</span>
                                </div>
                            </div>  
                            <div className='reservation-table'>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>ID</td>
                                            <td>Name</td>
                                            <td>Restaurant</td>
                                            <td>Table No.</td>
                                            <td>Time</td>
                                            <td>Date</td>
                                            <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reserves ?
                                            reserves.map(reserve => {
                                                return <ReservationHistory 
                                                    key={reserve.id}
                                                    id = {reserve.id}
                                                    userName = {user.firstName+' '+user.lastName}
                                                    restaurant = {reserve.resturantName}
                                                    table = {reserve.table_no}
                                                    time = {reserve.time}
                                                    date = {reserve.date}
                                                    status = {reserve.status}
                                                />
                                            })
                                            :
                                            <NoHistory />
                                        }
                                    </tbody>
                                </table>
                            </div>   
                        </div>
                    </section>
                </>
            }
            
        </>
    )
    }

export default UserPage
