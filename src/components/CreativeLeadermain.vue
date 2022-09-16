<template>
    <div class="creative">
       <div class="container leaders">
        <di class="row">
            <div class="col-50">
                <h2 class="serif">Creative Leader<span class="dot">.</span> </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nulla eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etim enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in sociis.</p>
                <span>
                    <font-awesome-icon class="icon" style="padding-right:5px" icon="fa-solid fa-arrow-right-long" />
                    <a style="color:black" href="">READ MORE</a>
                </span>
            </div>
            <div class="col-50">
                <ul>
                    <li>
                        <h5 class="serif">Mentorship</h5>
                        <span class="serif">78%</span>
                    </li>
                    <div class="line-1"></div>
                </ul>
                <ul>
                    <li>
                        <h5 class="serif">Education</h5>
                        <span class="serif">95%</span>
                    </li>
                    <div class="line-2"></div>
                </ul>
                <ul>
                    <li>
                        <h5 class="serif">Learning</h5>
                        <span class="serif">65%</span>
                    </li>
                    <div class="line-3"></div>
                </ul>
                <ul>
                    <li>
                        <h5 class="serif">Motivation</h5>
                        <span class="serif">83%</span>
                    </li>
                    <div class="line-4"></div>
                </ul>
            </div>
        </di>
       </div>

       <div class="latest-news">
        <span class="arrow-left">
        <font-awesome-icon class="left-A" icon=" fa-solid fa-arrow-left-long" />
        </span>
        <span class="arrow-left">
        <font-awesome-icon class="right-A" icon= "fa-solid fa-arrow-right-long" />
        </span>
            <div class="title-news">
                <h2 class="serif">Latest News<span>.</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div  class="container">
                <div class="grid">
                    <div v-for="(news, index) in NewsInfo" :key="index" class="card">
                        <img  :src="news.img" alt="">
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
                        <span>
                            <font-awesome-icon class="icon" style="padding-right:5px" icon="fa-solid fa-arrow-right-long" />
                            <a style="color:black" href="">READ MORE</a>
                        </span>
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

            .dot{
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
        span{

            &:hover{
                .icon{
                    display: inline-block;
                    color: $hoverText;
                }   
            }
            .icon{
                display: none;
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
        .line-1, .line-2, .line-3, .line-4 {

            &::after {
                content: "";
                display: block;
                width: 100%;
                height: 2px;
                background-color: $hoverText;
            }
        }
        .line-1{
            &::after{
                background: linear-gradient(90deg, rgba(255,70,18,1) 78%, rgba(231,230,230,1) 78%);
            }
        }
        .line-2{
            &::after{
                background: linear-gradient(90deg, rgba(255,70,18,1) 95%, rgba(231,230,230,1) 95%);
            }
        }
        .line-3{
            &::after{
                background: linear-gradient(90deg, rgba(255,70,18,1) 65%, rgba(205,230,205,1) 65%);
            }
        }
        .line-4{
            &::after{
                background: linear-gradient(90deg, rgba(255,70,18,1) 83%, rgba(205,230,205,1) 83%);
            }
        }
    }
}
.latest-news{
    text-align: center;
    margin-top: 40px;
    background-color: $GbGray;
    padding: 70px 0;
    position: relative;
    z-index: 10;

    .left-A{
        position: absolute;
        left: 5%;
        top: 50%;
        cursor: pointer;
        transition: all 0.5s;
        
        &:hover{
        transform: translateX(-5px);
        }
    }
    .right-A{
        position: absolute;
        right: 5%;
        top: 50%;
        cursor: pointer;
        transition: all 0.5s;

        &:hover{
            transform: translateX(5px);
        }
    }
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
                    
            img{
                cursor: pointer;
                transition: all 0.5s;
                        
                &:hover{
                    transform: scale(1.02);
                }
            }
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
                cursor: pointer;
                
                &:hover{
                    color: $hoverText;
                }
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

                &:hover{
                    .icon{
                            display: inline-block;
                            color: $hoverText;
                    }
                }
                .icon{
                    display: none;
                }
            }
        }
    }
}
    
    
  </style>
  