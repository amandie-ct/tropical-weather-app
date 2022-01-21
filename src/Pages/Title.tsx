import React from "react";
import weathericon from "../Styles/img/weathericon.svg";

const Title: React.FC = () => {
    return <div className="title-bg">
        <h1 className="logo">PrevTempo</h1>
        <img className="logo-icon" src={weathericon} alt="cloudy weather icon"/>
    </div>
}

export default Title;