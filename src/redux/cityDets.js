import { createSlice } from "@reduxjs/toolkit";

export const cityDetsSlice = createSlice({
    name: 'cityDetails',
    initialState: {
        forecast: null,
        forecastIcon: null,
        temperature: null,
        isDayTime: null
    },
    reducers: {
        setCityDets: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setCityDets } = cityDetsSlice.action;

export default cityDetsSlice.reducer;