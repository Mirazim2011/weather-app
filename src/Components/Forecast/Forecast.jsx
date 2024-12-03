import React from 'react'
import Item from '../Item/Item'
function Forecast({ data }) {
    
    return (
        <div className="forecast_case">
                <h2 className="forecast_h2">5 days forecast</h2>
                <ul className="forecast_list">
                    <Item data={data?.list[7]} />
                    <Item data={data?.list[15]} />
                    <Item data={data?.list[23]} />
                    <Item data={data?.list[31]} />
                    <Item data={data?.list[39]} />
                </ul>
        </div>
    )
}

export default Forecast