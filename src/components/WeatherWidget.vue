<template>
  <div class="weather-widget">
    <div class="widget-header">
      <h2>{{ location }}</h2>
    </div>
    <div class="widget-body">
      <p>{{ roundedTemperature }}°F</p>
      <div class="temp-icon">
        <img :src="iconUrl" alt="Weather Icon" class="icon">  <!-- Display the icon -->
      </div>
      <p>{{ condition }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const weather_api_key = process.env.VUE_APP_WEATHER_API_KEY;
export default {
  data() {
    return {
      location: 'Columbus',
      temperature: null,
      condition: null,
      icon: null  // New property to hold the icon code
    };
  },
  computed: {
    roundedTemperature() {
      return Math.round(this.temperature);  // New computed property for rounded temperature
    },
    iconUrl() {
      return `https://openweathermap.org/img/wn/${this.icon}@2x.png`;  // Construct the icon URL
    }
  },
  methods: {
    async fetchWeatherData() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=imperial&appid=` + weather_api_key
        );
        console.log(response);  // Log the response to the console
        this.temperature = response.data.main.temp;
        this.condition = response.data.weather[0].description;
        this.icon = response.data.weather[0].icon;  // Retrieve the icon code
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  },
  mounted() {
    this.fetchWeatherData();
  }
}
</script>

<style scoped>
.weather-widget {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  margin: 20px;
}

.temp-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.temp-icon .icon {
  margin-right: 10px;
}

</style>
