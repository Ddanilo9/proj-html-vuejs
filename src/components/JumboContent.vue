<template>
    <div class="jumbo grid">
        <div class="info-box d-flex">
          <h1>Our Team.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa nesciunt laboriosam quam molestias harum voluptatum, aliquam rerum!</p>
          <div class="buttons d-flex">
           <button class="more">
            <span>read more</span> 
            <font-awesome-icon icon="fa-solid fa-minus" />
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </button>
            
          <button class="purchase">
            <span>purchase</span> 
            <font-awesome-icon icon="fa-solid fa-minus" />
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </button> 
          </div>
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
        z-index: -1;
        background-position: center;
        background-size: cover;
    }
    .grid{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;

    .info-box{
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      transform: translateX(120px) translateY(-45px);
       .buttons{
        .fa-minus{
          transform: rotate(90deg);
          margin-right: 20px;
        }
        span{
          margin-right: 15px;
        }
       }
       h1{
        font-size: 70px;
       }
       p{
        width: 90%;
        font-weight: 300;
        font-size: 22px;
        line-height: 24px;
       }
       .more, .purchase{
        background-color: white;
        border: none;
        padding: 20px 30px 20px 30px;
        margin: 20px 20px 20px 0;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
       }
       .purchase{
        background-color: orangered;
        color: white;
       }
    }
    }
  </style>
  