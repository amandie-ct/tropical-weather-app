import React from "react";

const Output: React.FC = () => {
    return <section className="output-bg">
        <h3>data.LocalizedName</h3>
        <div className="forecast-info">        
            <h4>Ensolarado</h4>
            <img className="weather-icon" src="#"/>
        </div>
        <h2><span>30</span>&deg;C</h2>
    </section>
}

export default Output;