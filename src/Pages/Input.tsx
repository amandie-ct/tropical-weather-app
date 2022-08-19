import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { getCity, getWeather } from "../Services/API";
import { ICurrentConditions } from "../Types/ICurrentConditions";

interface InputProps {
    currentConditions: ICurrentConditions
    setCurrentConditions: Function
    setLocalizedName: Function
}

const Input: React.FC<InputProps> = ({currentConditions, setCurrentConditions, setLocalizedName}) => {
    const [cityName, setCityName] = useState('');
    const key: string = 'f7JP84cluI08PJ11jGoppxhs74bl05sb';

    const getWeatherForecast = async () => {
        const cityResponse: any = await getCity(key, cityName)
        setLocalizedName(cityResponse.data[0].LocalizedName)
        const locationKey = cityResponse.data[0].Key
        const weatherResponse: any = await getWeather(key, locationKey)
        setCurrentConditions({
            weatherText: weatherResponse.WeatherText,
            weatherIcon: weatherResponse.WeatherIcon,
            isDayTime: weatherResponse.IsDayTime,
            temperature: weatherResponse.Temperature.Metric.Value
        })
    }
    
    return (
        <form>
            <div className="input">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />

                <input className="input-text" type="text" placeholder="Busque uma cidade..."
                    value={cityName} name="cityName"
                    onChange={e => setCityName(e.target.value.toLowerCase().trim())} />

                <FontAwesomeIcon icon={faSearch} className="input-icon" type="submit"
                    onClick={() => getWeatherForecast()} />
            </div>
        </form>
    )
}

export default Input;
