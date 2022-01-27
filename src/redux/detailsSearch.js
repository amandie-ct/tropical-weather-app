import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


export const detailsApi = createApi({
    reducerPath: 'detailsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://dataservice.accuweather.com/currentconditions/v1/'
    }),
    endpoints: (builder) => ({
        getCityByName: builder.query({
            query: (id) => `?apikey=f7JP84cluI08PJ11jGoppxhs74bl05sb&q=${id}&language=pt-br`
        }),
    }),
})

export const { useGetCityByNameQuery } = detailsApi;