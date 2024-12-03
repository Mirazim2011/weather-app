function AirItem({ airData, airType }) {
    return (
        <li className="air_item">
            <span className='air_item_span'>{airType}</span>
            <h1 className='air_item_str'>{airData}</h1>
        </li>
    )
}

export default AirItem