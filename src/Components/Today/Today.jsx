import { FaCloud } from "react-icons/fa6";
function Today({ data }) {
    console.log(data);
    return (
        <div className='today'>
            <h3 className="today_title">
                Today at
            </h3>
            <ul className="today_list">
                <li className="today_item">
                    <p>3 AM</p>
                    <FaCloud style={{ color: "white", width: "35px", height: "35px" }} />
                    <p>{data?.list[4].main.temp}°C</p>
                </li>
                <li className="today_item">
                    <p>6 AM</p>
                    <FaCloud style={{ color: "white", width: "35px", height: "35px" }} />
                    <p>{data?.list[5].main.temp}°C</p>
                </li>
                <li className="today_item">
                    <p>9 AM</p>
                    <FaCloud style={{ color: "white", width: "35px", height: "35px" }} />
                    <p>{data?.list[6].main.temp}°C</p>
                </li>
                <li className="today_item">
                    <p>12 AM</p>
                    <FaCloud style={{ color: "white", width: "35px", height: "35px" }} />
                    <p>{data?.list[7].main.temp}°C</p>
                </li>
                <li className="today_item">
                    <p>3 PM</p>
                    <FaCloud style={{ color: "white", width: "35px", height: "35px" }} />
                    <p>{data?.list[0].main.temp}°C</p>
                </li>
                <li className="today_item">
                    <p>6 PM</p>
                    <FaCloud style={{ color: "white", width: "35px", height: "35px" }} />
                    <p>{data?.list[1].main.temp}°C</p>
                </li>
                <li className="today_item">
                    <p>9 PM</p>
                    <FaCloud style={{ color: "white", width: "35px", height: "35px" }} />
                    <p>{data?.list[2].main.temp}°C</p>
                </li>
                <li className="today_item">
                    <p>12 PM</p>
                    <FaCloud style={{ color: "white", width: "35px", height: "35px" }} />
                    <p>{data?.list[3].main.temp}°C</p>
                </li>
            </ul>
        </div>
    )
}

export default Today