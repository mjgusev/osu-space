<template>

    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-osuspace">osu.space</a>
        <div class="nav-item-group">
            <a class="nav-item nav-link" href="https://osu.instructure.com">CarmenCanvas</a>
            <a class="nav-item nav-link" href="https://buckeyelink.osu.edu/">BuckeyeLink</a>
            <a class="nav-item nav-link" href="#">Settings</a>
        </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>

    .navbar-osuspace {
        font-family: 'BuckeyeSans', sans-serif;
        font-size: 30px;
    }
    .navbar-osuspace {
        margin-left: 20px;
        color: white
    }


    .nav-item {
        font-family: 'BuckeyeSerif', sans-serif;
        text-decoration: none;
        position: relative;
        margin-right: 25px;
        top: 20px;
    }

    .nav-item-group {
        float: right;
    }

  </style>
  