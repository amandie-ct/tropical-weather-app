import { createSlice } from "@reduxjs/toolkit";

export const cityDetailsSlice = createSlice({
    name: "dummy",
    initialState: {
        forecast: null,
        forecastIcon: null,
        temperature: null,
        isDayTime: null
    },
    reducers: {
        getDataFromAPI: (state, cityname) => {
            
        }
    }
})
