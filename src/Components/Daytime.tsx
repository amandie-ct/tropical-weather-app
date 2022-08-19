import React from "react";
import { ICurrentConditions } from "../Types/ICurrentConditions";

interface DaytimeProps {
    currentConditions: ICurrentConditions
}

const Daytime: React.FC<DaytimeProps> = ({currentConditions}) => {
    const day: string = 'imgs/day.gif';
    const night: string =  'imgs/night.gif';
    return <div className="daytime-container">
            <img className="dayTime" alt="horário do dia"
            src={currentConditions.isDayTime ? day : night}/>
        </div>
}

export default Daytime;