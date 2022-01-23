import React from "react";

const Daytime: React.FC = () => {
    const day:string = 'imgs/day.gif';
    const night: string =  'imgs/night.gif';
    return <div className="daytime-container">
            <img className="dayTime" src={day}/>
        </div>
}

export default Daytime;