import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


export const cityApi = createApi({
    reducerPath: 'cityApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://dataservice.accuweather.com/locations/v1/cities/search/'
    }),
    endpoints: (builder) => ({
        getCityByName: builder.query({
            query: (name) => `?apikey=f7JP84cluI08PJ11jGoppxhs74bl05sb&q=${name}&language=pt-br`
        }),
    }),
})

export const { useGetCityByNameQuery } = cityApi;