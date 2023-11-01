<template>
    <div class="gym-widget">
      <div class="widget-header">
        <h2>Gym Capacity</h2>
      </div>
      <div class="widget-body">
        <p>{{ gymCapacity }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        gymCapacity: null
      };
    },
    methods: {
      async fetchGymCapacity() {
        try {
          const response = await axios.get('http://localhost:3000/gym-capacity');
          this.gymCapacity = response.data.gymCapacity;
        } catch (error) {
          console.error('Error fetching gym capacity:', error);
        }
      }
    },
    mounted() {
      this.fetchGymCapacity();
    }
  }
  </script>
  
  <style scoped>
  .gym-widget {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    width: 150px;
    text-align: center;
    margin: 20px;
  }
  </style>
  