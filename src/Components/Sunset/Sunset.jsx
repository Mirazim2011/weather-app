import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";

function Sunset({ data }) {
    const formatTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes} ${period}`;
    };

    return (
        <div className='sunset'>
            <span className="sunset_span">
                Sunrise & Sunset
            </span>
            <ul className="sunset_list">
                <li className="sunset_item">
                    <div className="lol">
                        <LuSunrise style={{ color: "white", width: "70px", height: "70px" }} />
                        <div className="mini_lol">
                            <span className="sunset_span">Sunrise</span>
                            <h1>{formatTime(data?.sys.sunrise)}</h1>
                        </div>
                    </div>
                </li>
                <li className="sunset_item">
                    <div className="lol">
                        <LuSunset style={{ color: "white", width: "70px", height: "70px" }} />
                        <div className="mini_lol">
                            <span className="sunset_span">Sunset</span>
                            <h1>{formatTime(data?.sys.sunset)}</h1>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sunset;
