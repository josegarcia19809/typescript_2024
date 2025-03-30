import axios from 'axios';
import {SearchType} from "../../types/index.ts";

function UseWeather() {

    const fetchWeather = async (search: SearchType) => {
        try {
            const appId = '';
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
            const {data} = await axios.get(geoUrl);
            console.log(data);
        } catch (err) {
            console.log(err)
        }
    }
    return {
        fetchWeather,
    };
}

export default UseWeather;