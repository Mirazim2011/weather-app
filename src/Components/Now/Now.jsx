import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
function Now({ currentWeather }) {
    let weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const currentDate = {
        day: weekDays[new Date(currentWeather?.dt * 1000).getDay() - 1],
        date: new Date(currentWeather?.dt * 1000).getDate(),
        month: months[new Date(currentWeather?.dt * 1000).getMonth()],
        year: new Date(currentWeather?.dt * 1000).getFullYear(),
    };
    return (
        <div className="now">
            <h3>Now</h3>
            <div className="mini">
                <h1>{currentWeather?.main.temp}°C</h1>
                <img style={{ width: "100px", height: "100px" }} src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`} />
            </div>
            <p>{currentWeather?.weather[0].main}</p>
            <hr />
            <span className="now_span"><CiCalendar />{currentDate?.day}, {currentDate?.date}, {currentDate?.month?.slice(0, 3)} {currentDate?.year}
            </span>
            <span className="now_span"><CiLocationOn />{currentWeather?.name}, {currentWeather?.sys.country}
            </span>
        </div >
    )
}

export default Now