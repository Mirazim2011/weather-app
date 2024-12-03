import { FaWind } from "react-icons/fa";
import AirItem from "../AirItem/AirItem";

function Air({ air }) {
    let airQualityName = ["Good", "Fair", "Moderate", "Poor", "Very Poor"]
    return (
        <div className='air'>
            <div className='air_mini'>
                <span className='air_mini_span'>Air Quality Index</span>
                <button className={`air_btn`}>{airQualityName[air?.list[0].main.aqi - 1]}</button></div>
            <ul className="air_list" style={{ marginTop: "10px" }}>
                <AirItem airType={"CO"} airData={air?.list[0].components.co} />
                <AirItem airType={"Nh3"} airData={air?.list[0].components.nh3} />
                <AirItem airType={"NO"} airData={air?.list[0].components.no} />
                <AirItem airType={"NO2"} airData={air?.list[0].components.no2} />
                <AirItem airType={"O3"} airData={air?.list[0].components.o3} />
                <AirItem airType={"PM2_5"} airData={air?.list[0].components.pm2_5} />
                <AirItem airType={"PM10"} airData={air?.list[0].components.pm10} />
                <AirItem airType={"SO2"} airData={air?.list[0].components.so2} />
            </ul>
        </div >
    )
}

export default Air