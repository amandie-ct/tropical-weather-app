import { createSlice } from "@reduxjs/toolkit";
import { useGetForecastById } from "./forecastApi";
import { createAction } from '@reduxjs/toolkit';

const setForecast = createAction('/getConditions')
let action = setForecast();

export const currentConditionsSlice = createSlice({
    name: 'currentConditions',
    initialState: {
        localizedName: null,
        forecast: null,
        forecastIcon: null,
        temperature: null,
        isDayTime: null
    },
    reducers: {
        currentConditionsReducer: (state = currentConditions, action = setForecast) => {
            useGetDetailsById(id)
            return {
                localizedName = payload.LocalizedName,
                forecast = payload.WeatherText,
                forecastIcon = payload.forecastIcon,
                temperature = payload.Temperature.Metric.Value,
                isDayTime = payload.isDayTime
            }
        }
    }
})

export default currentConditionsReducer.reducer;
export const currentConditions;
export const setForecast;