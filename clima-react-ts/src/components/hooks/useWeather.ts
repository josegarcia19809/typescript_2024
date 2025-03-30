import axios from 'axios';
import {SearchType} from "../../types/index.ts";
import {z} from "zod";


const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
})
type Weather = z.infer<typeof Weather>

function UseWeather() {

    const fetchWeather = async (search: SearchType) => {
        try {
            const appId = import.meta.env.VITE_API_KEY;
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
            const {data} = await axios.get(geoUrl);

            const lat = data[0].lat;
            const lon = data[0].lon;

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const {data: weatherData} = await axios(weatherUrl);
            const result = Weather.safeParse(weatherData);
            if (result.success) {
                console.log(result.data.name);
                console.log(result.data.main.temp);
            }
            // console.log(weatherData.main.temp);
            // console.log(weatherData.name);

        } catch (err) {
            console.log(err)
        }
    }
    return {
        fetchWeather,
    };
}

export default UseWeather;