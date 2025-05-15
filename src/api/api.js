import axios from 'axios';
import {ref} from "vue";

const weatherData = ref(null);

export async function getWeather(city) {
    try {
        const apiKey = '6e90533fb62e0d95d0a65758dd19cfdf';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric&lang=ru`;
        const response = await axios.get(url);
        weatherData.value = response.data;
        return response.data;
    } catch (error) {
        console.log("Ошибка при получении погоды: ", error);
    }
}