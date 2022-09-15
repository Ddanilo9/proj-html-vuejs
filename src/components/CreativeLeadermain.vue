<template>
    <div class="creative">
       <div class="container">
        <dib class="row">
            <div class="col-50">
                <h2>Titolo</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, aliquid et vero deleniti ut optio.</p>
                <span>READ MORE</span>
            </div>
            <div class="col-50">
                <ul>
                    <li>
                        <h5>ciao</h5>
                        <span>78%</span>
                    </li>
                    <div class="line"></div>
                </ul>
                <ul>
                    <li>
                        <h5>ciao</h5>
                        <span>78%</span>
                    </li>
                    <div class="line"></div>
                </ul>
                <ul>
                    <li>
                        <h5>ciao</h5>
                        <span>78%</span>
                    </li>
                    <div class="line"></div>
                </ul>
                <ul>
                    <li>
                        <h5>ciao</h5>
                        <span>78%</span>
                    </li>
                    <div class="line"></div>
                </ul>
            </div>
        </dib>
       </div>
       <div class="latest-news">
            <div class="title-news">
                <h2>latest news</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <img src="../assets/img/h1-blog-img-01.jpg" alt="">
                            <font-awesome-icon icon="fa-regular fa-clock" />
                            <span>May, 5, 2019</span>
                            <font-awesome-icon icon="fa-regular fa-user" />
                            <span>Amanda Doe</span>
                            <h3>Next nvestment</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <span>REA DMORE</span>
                        </div>
                    </div>
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
  .container{
    padding: 20px;

     .col-50{
        flex-basis: 50%;
            li{
                display: flex;
                justify-content: space-between;     
            }
            .line{
                &::after{
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
     .col{
        flex-basis: calc(100%/3);
     }
  }
    
    
  </style>
  