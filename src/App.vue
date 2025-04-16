<script setup>
import SvgIcon from './components/SvgIcon.vue'
import SearchInput from './components/SearchInput.vue'
import MainBlock from '@/components/MainBlock.vue'
import InfoBlock from '@/components/InfoBlock.vue'
import { onMounted, ref } from 'vue'

const theme = ref('light');

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('theme', theme.value);
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.value = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
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
        <SearchInput />
      </header>
      <main>
        <MainBlock
          city="Краснодар"
          weather-icon="#icon-cloudy_rain"
          main-temperature="+9"
          main-name-weather="Ночной дождь"
          feels-like="+6"

          wind="26"
          humidity="83"
          pressure="1010"
          max_temp="9"
          min_temp="1"
          clouds="100"
        />
        <InfoBlock
          min_temp="1"
          max_temp="9"
          main-weather-name="Легкий дождь"
          humidity="83"
          wind="26"
        />
      </main>
    </main>
  </div>
</template>


<style scoped>

</style>