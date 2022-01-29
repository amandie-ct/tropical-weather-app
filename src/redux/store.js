import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cityApi } from './cityKeyApi';
import { cityReducer } from './cityInfoSlice';
import { forecastApi } from './forecastApi';
import { currentConditionsReducer } from './currentConditionsSlice';


const store = configureStore({
    reducer: {
        [cityApi.reducerPath]: cityApi.reducer,
        cityReducer: cityReducer.reducer,
        currentConditionsReducer: currentConditionsReducer.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cityApi.middleware),
});

// console.log(store.getState())

export default store;

