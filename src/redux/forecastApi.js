import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


export const forecastApi = createApi({
    reducerPath: 'forecastApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://dataservice.accuweather.com/currentconditions/v1/'
    }),
    endpoints: (builder) => ({
        getForecastById: builder.query({
            query: (id) => `?apikey=f7JP84cluI08PJ11jGoppxhs74bl05sb&q=${id}&language=pt-br`
        }),
    }),
})

export const { useGetForecastById } = forecastApi;