import axios from 'axios';

const API_KEY = '4b724b707a2ea3814e90c9ac8d56200c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url);

    console.log('request', request);

    //middleware stop the action until promise resolved. 
    //then create a new action and send to reducer.
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}