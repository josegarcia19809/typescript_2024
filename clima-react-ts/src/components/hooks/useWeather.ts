import axios from 'axios';
import {SearchType} from "../../types/index.ts";
import {z} from "zod";
import {useMemo, useState} from "react";
// import {object, string, number, InferOutput, parse} from "valibot";


const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
})
export type Weather = z.infer<typeof Weather>

// Valibot
// const WeatherSchema = object({
//     name: string(),
//     main: object({
//         temp: number(),
//         temp_max: number(),
//         temp_min: number()
//     })
// });

// type Weather = InferOutput<typeof WeatherSchema>;

function UseWeather() {
    const [weather, setWeather] = useState<Weather>({
        name: '',
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        }
    });

    const [loading, setLoading] = useState<boolean>(false);

    const fetchWeather = async (search: SearchType) => {
        setLoading(true);
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
                setWeather(result.data);
            }

            // const {data: weatherData} = await axios(weatherUrl);
            // const result = parse(WeatherSchema, weatherData);
            //
            // if (result) {
            //     console.log(result.name);
            //     console.log(result.main.temp);
            // }

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    }

    const hasWeatherData = useMemo(() => weather.name, [weather]);
    return {
        weather,
        loading,
        fetchWeather,
        hasWeatherData,
    };
}

export default UseWeather;