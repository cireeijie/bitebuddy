import ReservationForm from "./reservationForm";
import RestaurantTables from './restaurantTables'
import "../css/reservationModal.css"
import { useEffect, useState } from "react";
import axios from "axios";

const ReservationFormModal = ({opened, close, id, seats, name}) => {
    const [ table, setTable ] = useState()
    const tables = document.querySelectorAll('.table-container')
    const [ date, setDate ] = useState(false)
    const dateElement = document.querySelector('#date')
    const closeFormElement = document.querySelector('.close-modal')
    let selectedDate = {
        date: ''
    }

    const server = {
        host: 'http://localhost:3001',
        reservations: '/reservations'
    }

    const handleDate = () => {
        date ? setDate(false) : setDate(true);
    }

    if(closeFormElement) {
        closeFormElement.addEventListener('click', () => {
            setTable(0)
        })
    }

    useEffect(() => {
        if(dateElement) {
            selectedDate.date = dateElement.value
            if(selectedDate.date != '') {
                axios.post(`${server.host}${server.reservations}`, selectedDate)
                .then(response => {
                    let reservations = response.data.reservations

                    tables.forEach(table => {
                        table.classList.remove('reserved-table')
                    })

                    reservations.forEach(reservation => {
                        if(id == reservation.restaurantID) {
                            tables.forEach(table => {
                                if(table.id == reservation.tableNo) {
                                    table.classList.add('reserved-table')
                                    table.classList.remove('selected-table')
                                    setTable(0)
                                }
                            })
                        }
                    })
                })
            }
        }
    }, [date])

    useEffect(() => {
        tables.forEach(tableID => {
            tableID.id == table ? tableID.classList.add('selected-table') : tableID.classList.remove('selected-table')
        })
    }, [table])
    
    if(!opened) return null
    return (
        <div className="reserve-form-modal">
            <div className="close-modal" onClick={close}></div>
            <div className="reserve-form-container">
                <RestaurantTables 
                    totalTables={seats} 
                    selectedTable = {(e) => {
                        setTable(e.target.id)
                    }}
                />
                <ReservationForm 
                    reserveName={name} 
                    table={table} 
                    closeForm={close} 
                    partnerID = {id}
                    dateHandle ={handleDate}
                />
            </div>
        </div>
    )
}

export default ReservationFormModal