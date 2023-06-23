import { useEffect, useState } from 'react'
import '../css/reservationForm.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReservationForm = ({reserveName, table, closeForm, partnerID, dateHandle}) => {
    const [ time, setTime ] = useState()
    const [ date, setDate ] = useState()
    const [ selectedTable, setSelectedTable ] = useState(0)
    const navigate = useNavigate()

    const server = {
        host: 'http://13.236.165.58:3001',
        reserve: '/reservation'
    }

    let reserveForm = {
        userid: 0,
        restaurantID: partnerID,
        restaurant: reserveName,
        tableNo: selectedTable,
        selectedTime: time,
        selectedDate: date
    }

    useEffect(() => {
        setSelectedTable(table)
    }, [table])
    
    const currentDate = new Date()
    const currentTime = currentDate.getHours()+":"+currentDate.getMinutes()
    const today = currentDate.getFullYear()+"-"+(currentDate.getMonth()+1).toString().padStart(2, '0')+"-"+currentDate.getDate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(time && date && selectedTable != 0) {
            axios.post(`${server.host}${server.reserve}`, reserveForm)
            .then(response => {
                if(response.data.Status == 'Success') {
                    alert('Reservation successful.')
                    navigate('/user-page')
                    window.location.reload(true)
                }
                else {
                    alert('Error')
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
        if(selectedTable == 0) {
            alert('Please select a table')
        }
    }

    return (
        <div className="reservation-form-container">
            <div className="reservation-form">
                <form className="reservation" onSubmit={handleSubmit}>
                    <h2>Confirm Reservation</h2>
                    <span className='sub'>Instant, Intuitive, and Irresistibly Easy Reservations!</span>
                    <p className='name'>Reservation for: <span className='reserve-name'>{reserveName}</span></p>
                    <p className='table-no'>Table: <span className='table'>{selectedTable}</span></p>
                    <div className="input-item">
                        <label htmlFor="time">Time</label>
                        <input 
                            type="time" 
                            name="time" 
                            id="time" 
                            placeholder="Time" 
                            min='08:00:00'      
                            max='20:00:00' required 
                            onInput={(e) => {
                                setTime(e.target.value)
                                if(today == date) {
                                    if(parseFloat(e.target.value) < parseFloat(currentTime)) {
                                        alert("Selected time already passed.")
                                        e.target.value = currentTime
                                    }
                                    if(parseFloat(e.target.value) == parseFloat(currentTime)) {
                                        alert("Kindly book a reservation 1hour prior to the current time")
                                        e.target.value = currentTime
                                    }
                                }
                            }} 
                        />
                    </div>
                    <div className="input-item">
                        <label htmlFor="date">Date</label>
                        <input 
                            type="date" 
                            name="date" 
                            id="date" 
                            min={new Date().toISOString().split('T')[0]} placeholder="Date" required 
                            onChange={(e) => 
                                setDate(e.target.value)
                            }
                            onInput={dateHandle}
                        />
                    </div>
                    <div className="action-btns">
                        <button className="cancel" onClick={closeForm}>Cancel</button>
                        <button type="submit" className='submit'>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReservationForm