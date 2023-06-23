import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import FindYourNextBite from './pages/findYourNextBite';
import Footer from './components/footer';
import BackToTopButton from './components/backToTopButton';
import axios from 'axios';
import UserPage from './pages/userPage';
import { useState, useEffect } from 'react';

function App() {
  const [ isAuth, setIsAuth ] = useState(false)
  const [ user, setUser ] = useState()
  const [ partners, setPartners ] = useState()
  const [ message, setMessage ] = useState()
  const [ reservations, setReservations ] = useState()

  const server = {
    host: "http://13.236.165.58:3001",
    loggedInUser: "/user/login-status",
    restaurants: '/partners'
  }

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  useEffect(() => {
      axios.get(`${server.host}`)
      .then(response => {
          if(response.data.Status === 'Success') {
              setIsAuth(true)
              setUser(response.data.data)
              let reserves = response.data.data.reservations[0]

              axios.get(`${server.host}${server.restaurants}`)
              .then(response => {
                let restaurants = response.data
                reserves.forEach(reserve => {
                  restaurants.forEach(restaurant => {
                    if(reserve.restaurant_id == restaurant.id) {
                      reserve.resturantName = restaurant.company_name
                    }
                  })
                })
                setReservations(reserves)
              })
          }
          else {
              setIsAuth(false)
              setMessage(response.data.Message)
          }
      })
      .catch(err => {
        if(err) {
          console.log('Render Canceled')
        }
        else {
          console.log(err)
        }
      })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar isVerified = {isAuth} currentUser ={user} />
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/find-your-next-bite' element={<FindYourNextBite currentUser = {user}/>}/>
          <Route path='/user-page' element={<UserPage isVerified = {isAuth} errMessage = {message} currentUser = {user} reserves = {reservations} restaurants = {partners}/>}/>
        </Routes>
        <Footer/>
        <BackToTopButton/>
      </BrowserRouter>
    </>
  );
}

export default App;
