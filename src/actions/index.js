import { GET_CITY_KEY } from "./ActionTypes";
import { GET_WEATHER } from "./ActionTypes";

export const getCityKey = value => ({
    type: GET_CITY_KEY,
    newValue: value,
});

export const getWeatherDetails = value => ({
    type: GET_WEATHER,
    newValue: value,
})