import "../css/table.css"

const Table = ({tableNumber, selectedTable}) => {
    return (
        <div className="table-container" id={tableNumber} onClick={selectedTable}>
            <span className="table-no">{tableNumber}</span>
        </div>
    )
}

export default Table