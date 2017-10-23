import axios from 'axios';

const API_KEY = "e606ca90ad8d97d3a12a831f6ede1651";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},be`;
    const request = axios.get(url);
    return{
        type: FETCH_WEATHER,
        payload: request
    }
    
}