import { GET_WEATHER } from "../actions/ActionTypes";

const initialState = {
    newValue: '',
};

export const WeatherReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_WEATHER:
            return {
                ...state,
                newValue: action.newValue,
            };
        default:
            return state;
    }
}