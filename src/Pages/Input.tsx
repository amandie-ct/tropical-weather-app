import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCityInfo } from "../redux/cityInfoSlice";
import { setForecast } from "../redux/currentConditionsSlice";


const Input: React.FC = () => {
    const [cityName, setCityName] = useState('');
    
    
    return <div className="input">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon"/>

        <input className="input-text" type="text" placeholder="Busque uma cidade..."
        value={cityName} name="cityName" onChange={e => setCityName(e.target.value)}/>

        <FontAwesomeIcon icon={faSearch} className="input-icon" type="submit" 
        onClick={() => useDispatch()
        // useDispatch(setForecast(getCityInfo(cityName).Key))
        }/>
    </div>
}

export default Input;
