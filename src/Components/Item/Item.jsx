import React from 'react'

function Item({ data }) {
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
    const forecastItemDate = {
        day:
            new Date(data?.dt * 1000).getDay() - 1 != "-1"
                ? weekDays[new Date(data?.dt * 1000).getDay() - 1]
                : "Sunday",
        date: new Date(data?.dt * 1000).getDate(),
        month: months[new Date(data?.dt * 1000).getMonth()],
        year: new Date(data?.dt * 1000).getFullYear(),
    };

    return (
        <>
            <li className="forecast_item">
                <img
                    className="logo"
                    src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
                />
                <h3 className="sunset_span">
                    {data?.main.temp}°C
                </h3>
                <p className="sunset_span">
                    {forecastItemDate?.date} {forecastItemDate?.month?.slice(0, 3)}
                </p>
                <p className="sunset_span">{forecastItemDate?.day}</p>
            </li>
        </>
    )
}

export default Item