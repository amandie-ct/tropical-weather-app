import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useGetCityByNameQuery } from '../redux/citySearch';

const Input: React.FC = () => {
    const [cityName, setCityName] = useState('');
    
    
    return <div className="input">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon"/>

        <input className="input-text" type="text" placeholder="Busque uma cidade..."
        value={cityName} name="cityName" onChange={e => setCityName(e.target.value)}/>

        <FontAwesomeIcon icon={faSearch} className="input-icon" type="submit" onClick={useGetCityByNameQuery(cityName)}/>
    </div>
}

export default Input;
