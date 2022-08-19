import React from "react";
import { ICurrentConditions } from "../Types/ICurrentConditions";

interface OutputProps {
    currentConditions: ICurrentConditions
    localizedName: string
}

const Output: React.FC<OutputProps> = ({localizedName, currentConditions}) => {
    
    return <section className="output-bg">
        <h3>{localizedName}</h3>
        <div className="forecast-info">        
            <h4>{currentConditions.weatherText}</h4>
            <img className="weather-icon" alt="ícone da previsão do tempo" 
            src={`/imgs/weathericons/${currentConditions.weatherIcon}.svg`} />
        </div>
        <h2><span>{currentConditions.temperature}</span>&deg;C</h2>
    </section>
}

export default Output;