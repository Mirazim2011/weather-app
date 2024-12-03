import { MdOutlineWaterDrop } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaWind } from "react-icons/fa6";

function Info({ data }) {
    return (
        <div className='info'>
            <ul className="info_list">
                <li className="info_item">
                    <span className="info_span">Humidity</span>
                    <div className="loll">
                        <MdOutlineWaterDrop style={{ color: "white", width: "35px", height: "40px" }} />
                        <h1 className="katta">{data?.main.humidity}%</h1>
                    </div>
                </li>
                <li className="info_item">
                    <span className="info_span">Pressure</span>
                    <div className="loll">
                        <FaRegCompass style={{ color: "white", width: "35px", height: "40px" }} />
                        <h1 className="katta">{data?.main.pressure}hPa</h1>
                    </div>
                </li>
                <li className="info_item">
                    <span className="info_span">Visibility</span>
                    <div className="loll">
                        <MdOutlineRemoveRedEye style={{ color: "white", width: "35px", height: "40px" }} />
                        <h1 className="katta">{(data?.visibility)/1000}km</h1>
                    </div>
                </li>
                <li className="info_item">
                    <span className="info_span">Wind Speed</span>
                    <div className="loll">
                        <FaWind style={{ color: "white", width: "35px", height: "40px" }} />
                        <h1 className="katta">{data?.wind.speed}m/s</h1>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Info