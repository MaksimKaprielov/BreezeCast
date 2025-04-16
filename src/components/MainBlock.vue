<script setup>
  defineProps({
    city: String,
    weatherIcon: String,
    mainTemperature: Number,
    mainNameWeather: String,
    feelsLike: Number,

    wind: Number,
    humidity: Number,
    pressure: Number,
    max_temp: Number,
    min_temp: Number,
    clouds: Number
  })
</script>

<template>
  <section>
    <div class="main_block">
      <div>
        <div>
          <h2>{{ city }}</h2>
        </div>
        <div>
          <div>
            <svg>
              <use :href="weatherIcon"></use>
            </svg>
          </div>
          <div>
            <div>
              <h2>{{ mainTemperature }}</h2>
              <span>º</span>
            </div>
            <div>
              <h4>{{ mainNameWeather }}</h4>
              <p>Ощущается как: <span>{{ feelsLike }}</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Params -->
      <div>
        <div title="Скорость ветра">
          <svg>
            <use href="#icon-wind"></use>/
          </svg>
          <p>{{ wind }} km/h</p>
        </div>
        <div title="Уровень влажности">
          <svg>
            <use href="#icon-drop"></use>/
          </svg>
          <p>{{ humidity }}%</p>
        </div>
        <div title="Давление атмосферы">
          <svg>
            <use href="#icon-pressure"></use>/
          </svg>
          <p>+{{ pressure }}</p>
        </div>
        <div title="Температура">
          <svg>
            <use href="#icon-temp"></use>/
          </svg>
          <div>
            <p title="Минимальная температура за день">{{ min_temp }}º</p>
            <p title="Максимальная температура за день">{{ max_temp }}º</p>
          </div>
        </div>
        <div title="Облачность">
          <svg>
            <use href="#icon-cloud"></use>/
          </svg>
          <p>{{ clouds }}%</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>