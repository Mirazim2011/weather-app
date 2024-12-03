import Forecast from "../Forecast/Forecast"
import Now from "../Now/Now"

function Left({ currentWeather, currentForecast }) {
    return (
        <div className="left">
                <div className="left_inner">
                    <Now currentWeather={currentWeather} />
                    <Forecast data={currentForecast} />
                </div>
        </div>
    )
}

export default Left