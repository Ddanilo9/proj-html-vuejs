<template>
    <div class="events-main">
        <div class="upcoming-events">
            <div class="title">
                <h3>Upcoming Events</h3>
            </div>
            <div class="row">
                <div class="col-25">
                    <div class="date">
                        <div class="info">
                          <span>07</span>
                          <span>Jan.2022</span>  
                        </div> 
                    </div>
                </div>
                <div class="col-75">
                    <h3>Melbourne coaching</h3>
                    <div class="d-flex">
                        <font-awesome-icon icon="fa-regular fa-clock" />
                        <p>9:00 am- 5:00 pm, Jan 9, 2022</p>
                    </div>
                    <div class="d-flex">
                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                        <p>Cambridge, Ma 15258, Pa</p>
                    </div>
                    <h4>read More</h4>
                </div>
            </div>
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
  
  .events-main{
    background-image: url(../assets/img/h1-img-09.jpg);
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
        .upcoming-events{
            width: 400px;
            height: 600px;
            background-color: white;

            .title{
                padding: 10px 20px;
                border: 1px solid red;
            }
            .col-25{
                flex-basis: 25%;
                border: 1px solid blue;
                 .date{
                    padding: 20px;
                     .info{
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        background-color: orangered;
                     }
                 }
            }
            .col-75{
                flex-grow: 1;
                border: 1px solid blue;
                padding: 10px 20px;
            }
        }
  }
    
  </style>
  