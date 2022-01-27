import { createSlice } from "@reduxjs/toolkit";
import { useGetCityByNameQuery } from "./citySearch";

const cityId = {
    id: '',
}

export const idSlice = createSlice({
    name: cityId,
    id,
    reducers: {
        setCityId: (state) => {
            // setar o cityID no state pra ser usado no outro slice
        }
    }
})