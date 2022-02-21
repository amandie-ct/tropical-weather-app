import { combineReducers } from "redux";
import { CityKeyReducer } from "./CityKeyReducer";
import { WeatherReducer } from "./WeatherReducer";

export const Reducers = combineReducers({
    // reducers aqui
    cityState: CityKeyReducer,
    weatherState: WeatherReducer,
})