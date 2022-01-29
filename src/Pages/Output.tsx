import React from "react";

const Output: React.FC = () => {
    return <section className="output-bg">
        <h3>{}</h3>
        <div className="forecast-info">        
            <h4>{}</h4>
            <img className="weather-icon" src="{}"/>
        </div>
        <h2><span>{}</span>&deg;C</h2>
    </section>
}

export default Output;