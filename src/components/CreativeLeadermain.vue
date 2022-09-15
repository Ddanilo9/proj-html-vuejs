<template>
    <div class="creative">
       <div class="container leaders">
        <dib class="row">
            <div class="col-50">
                <h2 class="serif">Creative Leader<span>.</span> </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etim enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in sociis.</p>
                <span>READ MORE</span>
            </div>
            <div class="col-50">
                <ul>
                    <li>
                        <h5 class="serif">Mentorship</h5>
                        <span class="serif">78%</span>
                    </li>
                    <div class="line"></div>
                </ul>
                <ul>
                    <li>
                        <h5 class="serif">Education</h5>
                        <span class="serif">95%</span>
                    </li>
                    <div class="line"></div>
                </ul>
                <ul>
                    <li>
                        <h5 class="serif">Learning</h5>
                        <span class="serif">65%</span>
                    </li>
                    <div class="line"></div>
                </ul>
                <ul>
                    <li>
                        <h5 class="serif">Motivation</h5>
                        <span class="serif">83%</span>
                    </li>
                    <div class="line" style="width: 50%;"></div>
                </ul>
            </div>
        </dib>
       </div>


       <div class="latest-news">
            <div class="title-news">
                <h2 class="serif">Latest News<span>.</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div  class="container">
                <div class="grid">
                    <div v-for="(news, index) in NewsInfo" :key="index" class="card">
                        <img :src="news.img" alt="">
                        <div class="tag">
                            <font-awesome-icon icon="fa-solid fa-tag" />
                            <span>Business,Leading</span>
                        </div>
                        <div class="info d-flex">
                         <font-awesome-icon icon="fa-regular fa-clock" />
                        <span>{{news.data}}</span>
                        <font-awesome-icon icon="fa-regular fa-user" />
                        <span>{{news.author}}</span>   
                        </div>                      
                        <h3 class="serif">{{news.title}}</h3>
                        <p>{{news.paragraph}}</p>
                        <span>READ MORE</span>
                    </div>
                </div>
            </div>
       </div>
    </div>
  </template>
  
  <script>
  import nws1 from '../assets/img/h1-blog-img-01.jpg'
  import nws2 from '../assets/img/h1-blog-img-02.jpg'
  import nws3 from '../assets/img/h1-blog-img-03.jpg'
  
  
  export default {
  data(){
    return{
        NewsInfo:[
            {
                img: nws1,
                data: 'May 5, 2020',
                author: 'Diana Apr',
                title: 'Next Investment',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor',
            },
            {
                img: nws2,
                data: 'May 8, 2020',
                author: 'Paolo Ret',
                title: 'Team Building',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor',
            },
            {
                img: nws3,
                data: 'May 10, 2020',
                author: 'Amanda Doc',
                title: 'New Business Day',
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor',
            },
        ]
    }
  }
  }
  </script>
  
  
  <style scoped lang="scss">
  @import '../styles/variables.scss';
  .creative{
    margin-top: 40px;
  }
  .container{
    padding: 20px;

     .col-50{
        flex-basis: 50%;
        padding: 15px;
            h2{
                font-size: 35px;
            span{
                    color: $hoverText;
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
            }
            p{
                color: $paragColor;
                font-weight: 300;
                font-size: 18px;
                margin-bottom: 5px;
            }
            
            li{
                display: flex;
                justify-content: space-between;   
                padding: 15px 0;
                    h5{
                        font-size: 19px;
                    }  
            }
            .line {
                &::after {
                        content: "";
                        display: block;
                        width: 100px;
                        height: 2px;
                        color: red;
                        background-color: red;
                    
                    }
            }
    }
  }
  .latest-news{
    text-align: center;
    margin-top: 40px;
    background-color: $GbGray;
    padding-top: 40px;
        .title-news{
           h2{
            font-size: 45px;
                span{
                    color: $hoverText;
                }
        }
        p{
            font-size: 22px;
            color: $paragColor;
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
        
        .grid{
            padding-top: 40px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 30px;
            position: relative;
                .card{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: baseline;
                    position: relative;
                    .tag{
                        background-color: $hoverText;
                        position: absolute;
                        bottom: 132px;
                        right: 10px;
                        padding: 5px;
                        color: white;
                            .fa-tag{
                                font-size: 10px;
                                padding-right: 6px;
                            }
                            span{
                                font-weight: 300;
                            }
                    }
                        .info{
                            padding-top: 5px;
                            .fa-clock,
                            .fa-user{
                                color: $hoverText;
                                font-size: 12px;
                                padding-right: 5px;
                            }
                            span{
                                color: $paragColor;
                                font-weight: 300;
                                padding-right: 8px;
                            }
                        }
                        h3{
                                font-size: 24px;
                                padding: 8px 0;
                            }
                        p{
                            text-align: start;
                            font-size: 19px;
                            color: $paragColor;
                            font-weight: 300;
                            padding-bottom: 10px;
                        }
                        span{
                            font-weight: 600;
                        }
                }
        }
  }
    
    
  </style>
  