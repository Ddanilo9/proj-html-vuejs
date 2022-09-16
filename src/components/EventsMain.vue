<template>
    <div class="events-main">
        <div class="upcoming-events">
            <div class="title">
                <h3 class="serif">Upcoming Events</h3>
            </div>
            <div v-for="(event, index) in events" :key="index" class="row">
                <div class="col-25">
                    <div class="date">
                        <div class="info">
                          <span>{{event.data}}</span>
                          <!-- <span class="month">Jan.2022</span>   -->
                        </div> 
                    </div>
                </div>
                <div class="col-75">
                    <h3>{{event.titolo}}</h3>
                    <div class="d-flex">
                        <font-awesome-icon icon="fa-regular fa-clock" />
                        <p>{{event.data +  event.ora}}</p>
                    </div>
                    <div class="d-flex">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        <p>{{event.luogo}}</p>
                    </div>
                    <h4 class="upper">
                        <font-awesome-icon class="icon" style="padding-right:5px" icon="fa-solid fa-arrow-right-long" />
                        <a style="color:black" href="">read More</a>
                    </h4>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
 export default {
  data(){
    return{
        events:[
            {
                titolo: 'Melbourne Coaching',
                data: '7-Jan-2022',
                ora: '9:00 am - 5:00 pm',
                luogo: 'Cambridge, MA02138, USA'
            },
            {
                titolo: 'New York Coaching',
                data: '11-Jan-2022',
                ora: '9:00 am - 5:00 pm',
                luogo: 'Cambridge, MA02138, USA'
            },
            {
                titolo: 'London Coaching',
                data: '21-Jan-2022',
                ora: '9:00 am - 5:00 pm',
                luogo: 'Cambridge, MA02138, USA'
            },
        ]
    }
  }
  }
  </script>
  
  
<style scoped lang="scss">
  @import '../styles/variables.scss';
  
.events-main{
    background-image: url(../assets/img/h1-img-09.jpg);
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;

    .upcoming-events{
        width: 400px;
        background-color: white;
        transform: translateX(45%);
        align-self: center;
            .title{
                padding: 30px 35px;
                box-shadow: 0px 5px 12px -6px rgb(0 0 0 / 61%);
            }
            .col-25{
                flex-basis: 25%;
                box-shadow: 0px 2px 8px -6px rgb(0 0 0 / 61%);

                .date{
                    padding: 20px;
                    color: white;
                   
                    .info{
                    display: flex;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    background-color: #FF4612;
                    transform: translateX(20px);
                    aspect-ratio: 1/1;
                    justify-content: center;
                        span{
                            font-size: 14px;
                            font-weight: 400;
                            display: flex;
                            flex-direction: column;
                            text-align: center;
                        }
                    }
                }
            }
            .col-75{
                flex-grow: 1;
                padding: 30px 25px;
                box-shadow: 0px 2px 8px -6px rgb(0 0 0 / 61%);
                
                h3{
                    padding-bottom: 5px;
                    cursor: pointer;
                    &:hover{
                        color: $hoverText;
                    }
                }
                h4{
                    .icon{
                        color: $hoverText;
                        display: none;
                    }
                    &:hover{
                        .icon{
                        display: inline-block;
                    }
                        }
                        a{
                            font-size: 13px;
                            font-weight: 600;
                        }
                    }
                    .fa-clock,
                    .fa-location-dot{
                    color: $hoverText;
                    font-size: 12px;
                    font-weight: 300;
                }
                p{
                    font-weight: 300;
                    padding-left: 5px;
                    padding-bottom: 6px;
                    padding-top: 2px;
                }
                .upper{
                    padding-top: 5px;
                }
            }
        }
  }
    
  </style>
  