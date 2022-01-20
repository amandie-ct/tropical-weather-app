import React from "react";

const Daytime: React.FC = () => {
    const day:string = 'day.gif';
    const night: string =  'night.gif';
    return <div>
            <img src={night}/>
        </div>
}

export default Daytime;