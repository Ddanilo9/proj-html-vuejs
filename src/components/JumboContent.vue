<template>
    <div class="jumbo">
        <div class="info-box">
          <h1>
            ciao
          </h1>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
  data(){
    return{
      
    }
  }
  }
  </script>
  
  
  <style scoped lang="scss">
  @import '../styles/variables.scss';
  
    .jumbo{
        background-image: url(../assets/img/rev-slider-main-home-img-03.jpg);
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: -1;
        background-position: center;
        background-size: cover;
    }
  </style>
  