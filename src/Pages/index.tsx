import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from "./Search";
import Result from "./Result";

const RoutesComponent: React.FC = () => {
    const [localizedName, setLocalizedName] = useState('')
    const [currentConditions, setCurrentConditions] = useState({
        weatherText: '',
        weatherIcon: 12,
        isDayTime: false,
        temperature: 0
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Search
                    currentConditions={currentConditions}
                    setCurrentConditions={setCurrentConditions}
                    setLocalizedName={setLocalizedName}
                /> } />
                <Route path="/result" element={ <Result 
                currentConditions={currentConditions}
                localizedName={localizedName}
                /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent;