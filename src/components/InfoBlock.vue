<script setup>
  defineProps({
    min_temp: Number,
    max_temp: Number,
    mainWeatherName: String,
    humidity: Number,
    wind: Number
  })
</script>

<template>
  <section>
    <div class="info_block">
      <div>
        <div>
          <h5>Утром</h5>
          <div>
            <div>
              <svg>
                <use href="#icon-temp"></use>
              </svg>
              <p>{{ min_temp }}º</p>
              <p>{{ max_temp }}º</p>
            </div>
            <div>
              <svg>
                <use href="#icon-rain"></use>
              </svg>
              <p>{{ mainWeatherName }}</p>
            </div>
            <div>
              <svg>
                <use href="#icon-drop"></use>
              </svg>
              <p>{{ humidity }}%</p>
            </div>
            <div>
              <svg>
                <use href="#icon-wind"></use>
              </svg>
              <p>{{ wind }} km/h</p>
            </div>
          </div>
        </div>
        <div>
          <h5>Днем</h5>
          <div>
            <div>
              <svg>
                <use href="#icon-temp"></use>
              </svg>
              <p>{{ min_temp }}º</p>
              <p>{{ max_temp }}º</p>
            </div>
            <div>
              <svg>
                <use href="#icon-rain"></use>
              </svg>
              <p>{{ mainWeatherName }}</p>
            </div>
            <div>
              <svg>
                <use href="#icon-drop"></use>
              </svg>
              <p>{{ humidity }}%</p>
            </div>
            <div>
              <svg>
                <use href="#icon-wind"></use>
              </svg>
              <p>{{ wind }} km/h</p>
            </div>
          </div>
        </div>
        <div>
          <h5>Вечером</h5>
          <div>
            <div>
              <svg>
                <use href="#icon-temp"></use>
              </svg>
              <p>{{ min_temp }}º</p>
              <p>{{ max_temp }}º</p>
            </div>
            <div>
              <svg>
                <use href="#icon-rain"></use>
              </svg>
              <p>{{ mainWeatherName }}</p>
            </div>
            <div>
              <svg>
                <use href="#icon-drop"></use>
              </svg>
              <p>{{ humidity }}%</p>
            </div>
            <div>
              <svg>
                <use href="#icon-wind"></use>
              </svg>
              <p>{{ wind }} km/h</p>
            </div>
          </div>
        </div>
        <div>
          <h5>Ночью</h5>
          <div>
            <div>
              <svg>
                <use href="#icon-temp"></use>
              </svg>
              <p>{{ min_temp }}º</p>
              <p>{{ max_temp }}º</p>
            </div>
            <div>
              <svg>
                <use href="#icon-rain"></use>
              </svg>
              <p>{{ mainWeatherName }}</p>
            </div>
            <div>
              <svg>
                <use href="#icon-drop"></use>
              </svg>
              <p>{{ humidity }}%</p>
            </div>
            <div>
              <svg>
                <use href="#icon-wind"></use>
              </svg>
              <p>{{ wind }} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>