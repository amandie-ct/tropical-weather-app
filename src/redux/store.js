import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cityApi } from './citySearch';
import { detailsApi } from './detailsSearch';


export default store = configureStore({
    reducer: {
        [cityApi.reducerPath]: cityApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cityApi.middleware),
    
})

