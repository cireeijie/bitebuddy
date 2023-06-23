import Table from "./table"
import { FaStop } from 'react-icons/fa'

const RestaurantTables = ({totalTables, selectedTable}) => {
    const tables = []

    const getTables = () => {
        for(let i = 1; i <= totalTables; i++) {
            tables.push(i)
        }
    }

    getTables()
    return (
        <div className="total-tables">
            <h2>Select a table</h2>
            <div className="info">
                <div className="reserved">
                    <FaStop className="table-info-icon"/>
                    <span>Reserved</span>
                </div>
                <div className="available">
                    <FaStop className="table-info-icon"/>
                    <span>Available</span>
                </div>
            </div>
            <div className="tables-container">
            {
                tables.map(table => {
                    return <Table 
                        key={table}
                        id={table}
                        tableNumber={table}
                        selectedTable={selectedTable}
                    />
                })
            }
            </div>
            
        </div>
    )
}

export default RestaurantTables