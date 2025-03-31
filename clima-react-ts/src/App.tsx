import styles from "./App.module.css"
import Form from "./components/Form/Form.tsx";
import useWeather from "./components/hooks/useWeather.ts";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail.tsx";
import Spinner from "./Spinner/Spinner.tsx";

function App() {

    const {weather, loading, fetchWeather, hasWeatherData} = useWeather();
    return (
        <>
            <h1 className={styles.title}>Buscador de clima</h1>
            <div className={styles.container}>
                <Form
                    fetchWeather={fetchWeather}
                />
                {loading && <Spinner/>}
                {hasWeatherData && <WeatherDetail weather={weather}/>}
            </div>
        </>
    );
}

export default App;