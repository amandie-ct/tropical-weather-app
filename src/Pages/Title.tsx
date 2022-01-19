import React from "react";
import weathericon from "../Styles/img/weathericon.svg";

const Title: React.FC = () => {
    return <div className="title-bg">
        <h1 className="logo">Weather App</h1>
        <img src={weathericon} alt="cloudy weather icon"/>
    </div>
}

export default Title;