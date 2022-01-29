import { createSlice } from "@reduxjs/toolkit";
import { useGetCityByNameQuery } from "./cityKeyApi";
import { createAction } from '@reduxjs/toolkit';

const getCityInfo = createAction('/getkey');
let action = getCityInfo();

export const cityInfo = createSlice({
    name: cityInfo,
    initialState: {
        cityKey: null,
        localizedName: null
    },
    reducers: {
        cityReducer: (state = cityInfo, action = getCityInfo) => {
            useGetCityByNameQuery();
            return {
                cityKey = payload.Key,
                localizedName: payload.LocalizedName
            }
        },
    }
});

export const { cityInfo } = cityInfo;
export const { getCityInfo } = getCityInfo.action;
export default cityReducer.reducer;

