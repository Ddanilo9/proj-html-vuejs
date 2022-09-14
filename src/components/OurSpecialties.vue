<template>
    <div class="our-special">
        <div class="container title">
           <h2>Our Specialties.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div class="container grid-4">
            <div class="card d-flex"
            v-for="(card, index) in links" :key="index">
            <img :src="card.img" alt="">
            <h4>{{card.titolo}}</h4>
            <p>{{card.parag}}</p>
            </div>
        </div> 
        <div class="container grid-2 ">
            <img :src="imageSlider" alt="">
            <div class="box-card">
                <div class="card-info">
                    <h2>Jason Bickford</h2>
                    <span>Lorem ipsum dolor sit amet.</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis praesentium sequi officiis, provident eum repellendus!</p>
                    <div>
                        <font-awesome-icon icon="fa-brands fa-linkedin" />
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  </template>
  
  <script>
 import svg1 from '../assets/svg/svg-0.svg'
 import svg2 from '../assets/svg/svg-1.svg'
 import svg3 from '../assets/svg/svg-2.svg'
 import svg4 from '../assets/svg/svg-3.svg'
 import image from '../assets/img/h1-blog-img-04.jpg'
  
  export default {
  data(){
    return{
        links: [
            {
                img: svg1,
                titolo: 'Homes',
                parag: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
            },
            {
                img: svg2,
                titolo: 'Pages',
                parag: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
            },
            {
                img: svg3,
                titolo: 'Blog',
                parag: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
            },
            {
                img: svg4,
                titolo: 'Shops',
                parag: 'Lorem, ipsum dolor sit amet consectetur adipisicing.'
            },
            ],
        imageSlider: image
    }
  }
  }
  </script>
  
  
  <style scoped lang="scss">
  @import '../styles/variables.scss';
  .our-special{
    background-color: #ebeaea;
    .title{
        padding-top: 90px;
        text-align: center;
        background-color: white;
        padding-bottom: 50px;
    }
  }
    .grid-4{
        background-color: white;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        padding-bottom: 120px;
         .card{
            padding: 0 20px;
            flex-direction: column;
            }
        }
       
    .grid-2{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
            .box-card{
            display: flex;
            flex-direction: column; 
            justify-content: center;
                .card-info{
                    background-color: white;
                    padding: 40px 20px;
                }
            } 
    }
  </style>
  