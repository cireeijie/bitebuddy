import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PrivateRoutes = ({isVerified}) => {
    const [ isAuth, setIsAuth ] = useState(isVerified)
    const [ firstName, setFirstName ] = useState()
    const [ reservations, setReservations ] = useState()
    const [ partners, setPartners ] = useState()
    const [ message, setMessage ] = useState()

    const server = {
        host: "http://localhost:3001",
        reservations: '/reservations',
        restaurants: '/partners'
    }

    useEffect(() => {
        axios.get(`${server.host}`)
        .then(response => {
            if(response.data.Status == 'Success') {
                setIsAuth(true)
                setFirstName(response.data.firstName)
                console.log(isVerified)
            }
            else {
                setIsAuth(false)
                setMessage(response.data.Message)
                console.log(message)
            }
        })
    })

    return (
        isAuth ? <Outlet /> : <Navigate to="/" />
    )
}


export default PrivateRoutes