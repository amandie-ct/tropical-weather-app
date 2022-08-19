import axios from 'axios';


const cityAPI = axios.create({
    baseURL: 'http://dataservice.accuweather.com/locations/v1/cities/search',
    timeout: 5000,
})

const conditionsAPI = axios.create({
    baseURL: 'http://dataservice.accuweather.com/currentconditions/v1/',
    timeout: 5000,
})

export const getCity = async (apiKey: string, query: string) => {
    return await cityAPI.get(`?apikey=${apiKey}&q=${query}&language=pt-br`)
}

export const getWeather = async (apiKey: string, location: string) => {
    return await conditionsAPI.get(`${location}?apikey=${apiKey}&language=pt-br`)
}