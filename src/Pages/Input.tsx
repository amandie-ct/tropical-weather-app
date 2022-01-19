import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input: React.FC = () => {
    let cityName: string = '';
    
    return <div className="input">
        <FontAwesomeIcon icon={faMapMarkerAlt}/>
        <input className="input-text" type="text" placeholder="Busque uma cidade..."/>
        <button className="submit">
            <FontAwesomeIcon icon={faSearch}/>
        </button>
    </div>
}

export default Input;