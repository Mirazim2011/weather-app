import React from 'react'
import Air from '../Air/Air'
import Sunset from '../Sunset/Sunset'
import Info from '../Info/Info'
import Today from '../Today/Today'

function Right({ air, currentWeather, currentForecast }) {
    return (
        <div style={{ marginBottom: "10px" }} className='right_inner'>
            <h2 className="title">Today's Highlights</h2>
            <div className="right_box">
                <Air air={air} />
                <Sunset data={currentWeather} />
            </div>
            <Info data={currentWeather} />
            <Today data={currentForecast}/>
        </div>
    )
}

export default Right