// action type

const FETCH_LOCATION_KEY = 'FETCH_LOCATION_KEY';

const fetchLocationKey = () => {
    return {
        type: 'FETCH_LOCATION_KEY'
    }
}

// (previousState, action) => newState;

// state
const cityInfo = {
    cityKey: ''
};

const cityReducer = (state = cityInfo, action) => {
    switch(action.type) {
        case FETCH_LOCATION_KEY: return {
            cityKey = payload.Key
        }
        default: return state
    };
};

const FETCH_CURRENT_CONDITIONS = 'FETCH_CURRENT_CONDITIONS';

const fetchCurrentConditions = () => {
    return {
        type: 'FETCH_CURRENT_CONDITIONS'
    }
}

const currentConditions = {
    localizedName: null,
    forecast: null,
    forecastIcon: null, 
    temperature: null,
    isDayTime: false
}

const conditionsReducer = (state = currentConditions, action) => {
    switch(action.type){
        case FETCH_CURRENT_CONDITIONS: return {
            localizedName: payload.LocalizedName,
            forecast: payload.weatherText,
            forecastIcon: payload.forecastIcon,
            temperature: payload.Temperature.Metric.Value,
            isDayTime: payload.isDayTime
        }
    }
}