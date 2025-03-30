import axios from 'axios';
import {SearchType} from "../../types/index.ts";

function UseWeather() {

    const fetchWeather = async (search: SearchType) => {
        try {
            const appId = import.meta.env.VITE_API_KEY;
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
            const {data} = await axios.get(geoUrl);

            const lat = data[0].lat;
            const lon = data[0].lon;

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const {data: weatherData} = await axios.get(weatherUrl);
            console.log(weatherData);

        } catch (err) {
            console.log(err)
        }
    }
    return {
        fetchWeather,
    };
}

export default UseWeather;