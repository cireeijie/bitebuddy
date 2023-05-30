import React, { useEffect, useState } from 'react';
import ReservationFormModal from './reservationModal'
import LoginForm from './loginForm';
import "../css/findNextBiteContent.css";
import FindNextBiteCard from './findNextBiteCard';
import SignupForm from './singupForm';
import axios from 'axios';

const FindNextBiteContent = ({currentUser}) => {
    const server = {
        host: 'http://localhost:3001',
        partners: '/partners',
        image: '/images/',
        loggedInUser: "/user/login-status"
    }

    const user = currentUser
    const [ openLoginForm, setOpenLoginForm ] = useState(false)
    const [ openSignupForm, setOpenSignupForm ] = useState(false)
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const [reserveForm, setReserveForm] = useState(false)
    const [formID, setFormID] = useState()
    const [partnerName, setPartnerName] = useState()
    const [seats, setSeats] = useState()
    const [ partners, setPartners] = useState([])

    useEffect(() => {
        if(user) {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }
        axios.get(`${server.host}${server.partners}`)
        .then(response => {
            setPartners(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='find-next-bite-content'>
            <div className='container'>
                <div className='next-bite-title'>
                    <span className='title'>Find Your Next Bite</span>
                    <span className='sub'>Discover delicious possibilities with every click.</span>
                </div>
                <div className='cards-container'>
                    {
                        partners.map(partner => {
                            return <FindNextBiteCard 
                                key={partner.id}
                                id={partner.id}
                                featImg={server.host+server.image+partner.image}
                                name={partner.company_name} 
                                logo={server.host+server.image+partner.logo} 
                                location={partner.location} 
                                seats={partner.seats}
                                time={partner.time}
                                openReserveForm={() => {
                                    setReserveForm(true)
                                    setOpenLoginForm(false)
                                    setFormID(partner.id)
                                    setSeats(partner.seats)
                                    setPartnerName(partner.company_name)
                                }}
                                verifyUser={isLoggedIn}
                                openLoginForm={() => {
                                    setOpenLoginForm(true)
                                    setReserveForm(false)
                                }}
                            />
                        })
                    }
                </div>
            </div>
            <ReservationFormModal 
                opened = {reserveForm} 
                close={() => {
                    setReserveForm(false)
                }}
                id={formID}
                seats={seats}
                name={partnerName}
            />
            <LoginForm 
                openLogin = {openLoginForm} 
                closeLogin={() => 
                    setOpenLoginForm(false)
                }
                toSignUp = {() => {
                    setOpenLoginForm(false)
                    setOpenSignupForm(true)
                }}
            />
            <SignupForm 
                openSignup = {openSignupForm} 
                closeSignup = {() => {
                    setOpenSignupForm(false)
                }}
                toLogin = {() => {
                    setOpenSignupForm(false)
                    setOpenLoginForm(true)
                }}
            />
        </div>
    )
}

export default FindNextBiteContent
