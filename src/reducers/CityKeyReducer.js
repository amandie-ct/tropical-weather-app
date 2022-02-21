import { GET_CITY_KEY } from "../actions/ActionTypes";

const initialState = {
    newValue: '',
};

export const CityKeyReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CITY_KEY:
            return {
                ...state,
                newValue: action.newValue,
            };
        default:
            return state;
    }
}