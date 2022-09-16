<template>
    <div class="testimonials">
      <div>
         <h1 class="serif">Testimonials</h1>
      </div>
      <div v-for="(item, index) in data" :key="index" class="container">
        <img src="../assets/img/h3-img-04.png" alt="">
        <h5 class="serif">{{item.name}}</h5>
        <p>{{item.paragraph}}</p>
        <div class="d-flex">
         <span class="first d-flex">01</span><span>03</span>
        </div>
     </div>
     <font-awesome-icon class="arrow-right" icon="fa-solid fa-arrow-right-long" />
     <font-awesome-icon class="arrow-left" icon="fa-solid fa-arrow-right-long" />
     <div class="video">
      <font-awesome-icon class="icon" style="align-self:center" icon="fa-solid fa-play" />
     </div>
    </div>
</template>
  
<script>
export default {
data(){
   return{
      data: [
         {
            name: 'Cynthia Clark',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         }
      ]
   }
}
}
</script>
  
  
<style scoped lang="scss">
  @import '../styles/variables.scss';
h1{
   color: #181515;
   text-align: center;
   font-size: 155px;
   position: absolute;
   top: -29px;
   left: 50%;
   transform: translateX(-50%);
}
.testimonials{
   background-color: rgb(28, 26, 26);
   position: relative;
   
   .container{
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 450px;
      z-index: 10;
      color: white;
      h5{
         font-size: 19px;
         padding: 14px 0;
      }
      p{
         font-size: 24px;
         text-align: center;
         font-weight: 300;
         color: rgb(196, 194, 194);
         padding-bottom: 15px;
      }
      span{
         font-size: 12px;
         margin-top: 8px;
      }
      .first{
         &::after{
            content: "";
            display: inherit;
            width: 130px;
            height: 1px;
            background: linear-gradient(90deg, rgb(114, 114, 114) 33%, rgba(255,255,255,1) 33%);
            margin: 0 6px;
            cursor: pointer;
         }
      }
   }
}
.arrow-right{
   color: white;
   position: absolute;
   top: 15%;
   transform: rotate(180deg);
   left: 80px;
   cursor: pointer;
   transition: all 0.5s;

   &:hover{
      left:75px
   }
}
  
.arrow-left{
   color: white;
   position: absolute;
   top: 15%;
   right: 80px;
   cursor: pointer;
   transition: all 0.5s;

   &:hover{
      transform: translateX(5px);
   }
}
 
.video{
   background-image: url(../assets/img/h1-img-04.jpg);
   height: 726px;
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   display: flex;
   justify-content: center;

   .icon{
      font-size: 40px;
      color: white;
      transition: all 0.5s;
      cursor: pointer;

      &:hover{
      transform: scale(1.1);
      }
   }
}
  </style>
  