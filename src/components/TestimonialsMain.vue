<template>
    <div class="testimonials">
     <div class="container">
        <img src="../assets/img/h3-img-04.png" alt="">
        <h5>Cinthia clrk</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ducimus?</p>
        <span>01 <span></span> 03</span>
     </div>
     <div class="video">

     </div>
    </div>
  </template>
  
  <script>
  
  
  
  export default {
  data(){
    
  }
  }
  </script>
  
  
  <style scoped lang="scss">
  @import '../styles/variables.scss';
  .testimonials{
    background-color: rgb(28, 26, 26);
     .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
     }
  }
  .video{
    background-image: url(../assets/img/h1-img-04.jpg);
    height: 726px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  </style>
  