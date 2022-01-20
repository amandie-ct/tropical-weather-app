import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Input: React.FC = () => {
    const [cityName, setCityName] = useState('');
    
    return <div className="input">
        <FontAwesomeIcon icon={faMapMarkerAlt}/>

        <input className="input-text" type="text" placeholder="Busque uma cidade..."
        value={cityName} name="cityName" onChange={e => setCityName(e.target.value)}/>

        <button className="submit" 
        // onClick={getWeather}
        >
            <FontAwesomeIcon icon={faSearch}/>
        </button>
    </div>
}

export default Input;
