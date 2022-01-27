import React from "react";
import { useGetCityByNameQuery } from '../redux/citySearch';

const Output: React.FC = () => {
    const { data, error, isLoading } = useGetCityByNameQuery('natal');
    return <section className="output-bg">
        <h3>{data.LocalizedName}</h3>
        <div className="forecast-info">        
            <h4>Ensolarado</h4>
            <img className="weather-icon" src="#"/>
        </div>
        <h2><span>30</span>&deg;C</h2>
    </section>
}

export default Output;