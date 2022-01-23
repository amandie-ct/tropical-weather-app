import React from "react";
import sun from "../Styles/img/sun.png";

const Title: React.FC = () => {
    return <div className="title-container">
        <h1 className="logo"><span>Prev</span>Tempo</h1>
        <img className="logo-icon" src={sun} alt="sun icon"/>
    </div>
}

export default Title;