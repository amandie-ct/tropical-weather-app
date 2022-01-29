import { useState } from "react";

// Lógica do fetch e set states com vanilla javascript

// primeiro - montar a query string para pegar o ID da cidade e fazer a chamada na API

const [cityName, setCityName] = useState('Natal');
const [cityId, setCityId] = useState('')

const assembleQueryString = (cityname: string) => {
    const apiKey: string = 'f7JP84cluI08PJ11jGoppxhs74bl05sb';
    const baseURL: string = 'http://dataservice.accuweather.com/locations/v1/cities/search/';
    const language: string = 'pt-br';

    const queryParams: object = new URLSearchParams({
        apiKey: apiKey,
        q: cityname,
        language: language
    });

    const queryString: string = baseURL.concat('?', queryParams.toString());

    return queryString;
};

const searchCity = (querystring: string) => {
    fetch(querystring)
    .then(res => {
        if (!res.ok){
            throw Error('Não foi possível encontrar o conteúdo')
        }
        return res.json()
    })
    .then(data => {
        setCityId(data.key)
    })
    .catch(err => {
        console.log(err);
    })
}

searchCity(assembleQueryString(cityName));

// pegar os detalhes da localidade com o city ID
const [cityDetails, setCityDetails] = useState({})

const assembleWeatherString = (cityid: string) => {
    cityid = cityId;
    const baseURL: string = `http://dataservice.accuweather.com/currentconditions/v1/${cityid}`;
    const apiKey: string = 'f7JP84cluI08PJ11jGoppxhs74bl05sb';
    const language: string = 'pt-br';
    const cityKey: string = cityId;

    const queryParams: object = new URLSearchParams({
        apiKey,
        language,
    });

    const cityQueryString: string = baseURL.concat('?', queryParams.toString());

    return cityQueryString;
}

const searchCityDetails = (querystring: string) => {
    fetch(querystring)
    .then(res => {
        if (!res.ok){
            throw Error('Não foi possível encontrar o conteúdo')
        }
        return res.json();
    })
    .then(data => {
        setCityDetails({
            forecast: data.WeatherText,
            forecastIcon: data.WeatherIcon,
            temperature: data.Temperature.Metric.Value,
            isDayTime: data.isDayTime
        })
    })
    .catch(err => {
        console.log(err);
    })
}

