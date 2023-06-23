const ReservationHistory = ({id, userName, restaurant, table, time, date, status}) => {

    return (
        <tr>
            <td>{id.toString().padStart(5, '0')}</td>
            <td>{userName}</td>
            <td>{restaurant}</td>
            <td>{table}</td>
            <td>{time}</td>
            <td>{date}</td>
            <td>{status}</td>
        </tr>
    )
}

export default ReservationHistory