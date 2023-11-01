<!-- src/App.vue -->
<template>
    <NavBar />
    <div id="app" class="container">
      <WeatherWidget class="widget" />
      <ScheduleWidget class="widget" />
      <GPAWidget class="widget" />
      <ToDoWidget class="widget" />
      <GymWidget class="widget" />
      <!-- ... other widgets -->
    </div>
  </template>
  
  <script>
  import GPAWidget from './components/GPAWidget.vue';
  import WeatherWidget from './components/WeatherWidget.vue';
  import ScheduleWidget from './components/ScheduleWidget.vue';
  import ToDoWidget from './components/ToDoWidget.vue';
  import NavBar from './components/NavBar.vue';
  import GymWidget from './components/GymWidget.vue';
  
  export default {
    components: {
      NavBar,
      WeatherWidget,
      GPAWidget,
      ScheduleWidget,
      ToDoWidget,
      GymWidget
  }
  }
  </script>
  
  <style>
  .app {
    background-color: #BB0000;
    font-family: 'Arial', sans-serif;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  </style>
  