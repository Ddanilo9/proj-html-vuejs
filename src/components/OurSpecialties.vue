<template>
    <div class="our-special">
        <div class="container title">
            <h2 class="serif">Our Specialties<span>.</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <div class="separator"></div>
        </div>
        <div class="container grid-4">
            <div class="card d-flex"
            v-for="(card, index) in links" :key="index">
            <img :src="card.img" alt="">
            <h4 class="serif">{{card.titolo}}</h4>
            <p>{{card.parag}}</p>
            </div>
        </div>

        <div class="container grid-2 ">
            <div class="buttons" style="position:relative">
               <img 
               v-for="image in imageSlider" :key="image.id" :src="image.image"
               :class="['none', currentIndex == image.id ? 'show' : 'none']">
               <button><font-awesome-icon @click="prevSlide()" class="icon" icon="fa-solid fa-arrow-left-long" /></button>
               <button class="rx"><font-awesome-icon @click="nextSlide()" class="icon" icon="fa-solid fa-arrow-right-long" /></button>
            </div>
            
            <div class="box-card">
                <div class="card-info">
                    <h2 class="serif">Jason Bickford</h2>
                    <span>Founder and executive director.</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                    <div class="socials">
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
 import image1 from '../assets/img/h1-blog-img-04.jpg'
 import image2 from '../assets/img/h1-blog-img-02.jpg'
 import image3 from '../assets/img/h1-blog-img-03.jpg'
  
export default {
    data(){
        return{
            currentIndex: 0,
            links: [
                {
                    img: svg1,
                    titolo: 'Knowing',
                    parag: 'Lorem ipsum dolor sit amet, quis consect.'
                },
                {
                    img: svg2,
                    titolo: 'Selling',
                    parag: 'Lorem ipsum dolor sit amet, quis consect.'
                },
                {
                    img: svg3,
                    titolo: 'Learning',
                    parag: 'Lorem ipsum dolor sit amet, quis consect.'
                },
                {
                    img: svg4,
                    titolo: 'Contact',
                    parag: 'Lorem ipsum dolor sit amet, quis consect.'
                },
            ],
            
            imageSlider:[
                {
                image: image1,
                id:0  
                },
                {
                image: image2, 
                id:1
                },
                {
                image: image3,
                id:2  
                }
            ]
        } 
    },
    methods: {
        nextSlide(){
        this.currentIndex ++
           if(this.currentIndex > this.imageSlider.length - 1){
            this.currentIndex = 0
           }
        },
        prevSlide(){
        this.currentIndex --
           if(this.currentIndex < 0){
            this.currentIndex = 2
           }
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
        h2{
            font-size: 45px;
            span{
                color: $hoverText;
            }
        }

        p{
            color: $paragColor;
            font-size: 22px;
            font-weight: 300;

            &::after{
                content: "";
                display: inherit;
                width: 70px;
                height: 2px;
                background-color: $hoverText;
                text-align: center;
                margin-left: 50%;
                transform: translateX(-50%);
                margin-top: 10px;
            }
        }
            
    }
}
.grid-4{
    background-color: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    padding-bottom: 120px;

    .card{
        padding: 0 20px;
        flex-direction: column;
        display: flex;
        flex-direction: column;
        align-items: center;
        h4{
            padding-top: 20px;
        }
        p{
            text-align: center;
            padding-top: 10px;
            color: $paragColor;
            font-weight: 300;
        }
    }
}
.grid-2{
    margin-top: 120px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 0 40px;
    position: relative;
    padding-bottom: 120px;

    .buttons{
        button{
            position: absolute;
            stroke-linecap: 0;
            bottom: 4px;
            padding: 25px 20px;
            left: 0px;
            border: none;
            background-color: $hoverText;
            color: white;
            cursor: pointer;

            .fa-arrow-left-long{
                transition: all 0.5s;

                &:hover{
                    transform: translateX(-3px);
                }
            }
            .fa-arrow-right-long{
                transition: all 0.5s;

                &:hover{
                    transform: translateX(3px);
                }
            }
        }
        .rx{
            left:52px
        }
        .none{
            display: none;
        }
        .show{
            display: inline-block;
        }
    }

    .box-card{
        display: flex;
        flex-direction: column; 
        justify-content: center;
        
        .card-info{
            background-color: white;
            padding: 50px 75px;
            position: absolute;
            bottom: 50%;
            transform: translateY(30%);
            width: 700px;
            left: 40%;
            
            h2{
            font-size: 35px;
            padding-bottom: 5px;
            }
            span{
                color: $paragColor;
                font-weight: 300;
                    
                &::after{
                content: "";
                display: block;
                width: 70px;
                height: 2px;
                background-color: $hoverText;
                margin-top: 10px;
                margin-bottom: 20px;
                }
            }

            p{
                color: $paragColor;
                font-weight: 300;
                font-size: 18px;
            }
            .socials{
                .fa-linkedin,
                .fa-facebook,
                .fa-twitter{
                    color: $hoverText;
                    padding: 5px 4px;
                    font-size: 20px;
                    margin-top: 5px;
                    cursor: pointer;
                }                
            }
        }
    } 
}
</style>
  