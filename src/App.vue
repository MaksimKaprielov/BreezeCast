<script setup>
import MainBlock from '@/components/MainBlock.vue'
import InfoBlock from '@/components/InfoBlock.vue'
import { ref, onMounted } from 'vue'
import { getWeather } from '@/api/api.js'

// тема
const theme = ref('light');
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('theme', theme.value);
}

// состояние города и погоды
const city = ref('Краснодар')
const weatherData = ref(null)
const error = ref(null)

const fetchWeather = async () => {
  if (!city.value.trim()) {
    error.value = 'Введите название города';
    return;
  }
  const data = await getWeather(city.value)
  if (data) {
    weatherData.value = data
    error.value = null
  } else {
    error.value = 'Город не найден'
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.value = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  fetchWeather()
})
</script>

<template>
  <div class="wrapper">
    <header class="logo">
      <div>
        <h1>ИМСИТ.ПОГОДА</h1>
        <p>ПОГОДА В РЕАЛЬНОМ ВРЕМЕНИ</p>
      </div>
      <button @click="toggleTheme">
        <svg>
          <use :href="theme === 'light' ? '#icon-sun' : '#icon-moon'"></use>
        </svg>
      </button>
    </header>

    <main>
      <header>
        <div class="search-input">
          <input type="search"
                 id="searchInput"
                 placeholder="Введите город"
                 v-model="city"
          >
          <button @click="fetchWeather">
            <svg>
              <use href="#icon-search"></use>
            </svg>
          </button>
        </div>
        <p v-if="error" class="error">{{ error }}</p>
      </header>

      <main v-if="weatherData">
        <MainBlock
            :city="weatherData.name"
            :weather-icon="'#icon-' + weatherData.weather[0].main.toLowerCase()"
            :main-temperature="Math.round(weatherData.main.temp) + '°C'"
            :main-name-weather="weatherData.weather[0].description"
            :feels-like="Math.round(weatherData.main.feels_like) + '°C'"
            :wind="weatherData.wind.speed"
            :humidity="weatherData.main.humidity"
            :pressure="weatherData.main.pressure"
            :max_temp="Math.round(weatherData.main.temp_max)"
            :min_temp="Math.round(weatherData.main.temp_min)"
            :clouds="weatherData.clouds.all"
        />

        <InfoBlock
            :min_temp="Math.round(weatherData.main.temp_min)"
            :max_temp="Math.round(weatherData.main.temp_max)"
            :main-weather-name="weatherData.weather[0].description"
            :humidity="weatherData.main.humidity"
            :wind="weatherData.wind.speed"
        />
      </main>
    </main>
  </div>
</template>

<style scoped>
.error {
  color: red;
  margin-top: 8px;
}
</style>
