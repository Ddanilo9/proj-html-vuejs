<template>
    <div class="contact-us">
     <div class="container">
        <div class="row">
            <div class="col-50 world">
                <div class="world-spot">
                    <p>New York Coaching</p>
                    <span>READ MORE</span>
                </div>
                <div class="add-1"></div>
                <div class="add-2"></div>
                <div class="add-3"></div>
            </div>
            <div class="col-50 form">
                <h3 class="serif">Contact Us<span>.</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <form action="" class="form-details">
                    <div class="d-flex">
                        <input type="text" placeholder="Your Name">
                        <input type="email" id="email" name="email" placeholder="Your Email"> 
                    </div>
                    <input class="email" type="text" id="fname" name="fname" placeholder="Write a message...">
                    <button>
                        <span>Send</span> 
                        <font-awesome-icon icon="fa-solid fa-minus" />
                        <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                    </button> 
                </form>
            </div>
        </div>
     </div>
     <div class="container grid-5">
        <div class="logos">
            <img class="imgLogo" src="../assets/img/h4-clients-img-04-1.png" alt="">
            <img class="imgHover" src="../assets/img/h4-clients-img-03.png" alt="">
        </div>
        <div class="logos">
            <img class="imgLogo" src="../assets/img/h4-clients-img-06-1.png" alt="">
            <img class="imgHover" src="../assets/img/h4-clients-img-05.png" alt="">           
        </div>
        <div class="logos">
            <img class="imgLogo" src="../assets/img/h4-clients-img-08-1.png" alt="">
            <img class="imgHover" src="../assets/img/h4-clients-img-07.png" alt="">
        </div>
        <div class="logos">
            <img class="imgLogo" src="../assets/img/h4-clients-img-10-1.png" alt="">
            <img class="imgHover" src="../assets/img/h4-clients-img-09.png" alt="">
        </div>
        <div class="logos">
            
            <img class="imgLogo" src="../assets/img/h4-clients-img-02.png" alt="">
            <img class="imgHover" src="../assets/img/h4-clients-img-01.png" alt="">
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

  .contact-us{
    background-color: $GbGray;
  }
  .col-50{
   flex-basis: 50%;
   padding: 5px 15px;
  }
  .world{
    background-image: url(../assets/img/h1-contact-rev-01.png);
    height: 547px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
        .world-spot{
            background-color: white;
            position: absolute;
            top: 50%;
            left: 40%;
            padding: 14px 20px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
        .add-1, .add-2, .add-3{
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAmVBMVEX/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/RhL/////9vT/7On/4t7/2NL/zsb/rJ//lIH/hnH/eF//aUv/WTP/RhIr4L/XAAAAJnRSTlMABAUGBwgeHycoNDU3SFRVZmdocnR1mJ/NztHS09TV5unq7e7w8d7xBPQAAADCSURBVHjafZLpFoIgEEY/K9pM26WwxQqtaDF5/4frHBVBC+8flssyDAMU9LyAcclZ4PVg4syOUhEtu1oMmTRhIyXcs6xzmRRixGUTnu/qMPlL2AGwkv9YASSqRp/rS0dI4Ot17+SpB1NQi6EILWYHbjEc6vKkogwDcd5kDyHEPbkJIUSaz8TYW047tMQ2tb7HyIFpTsTMW/ZIq/66Ndf2/wHGUUNErvru/qYmtgOjdha6do5zp1ZXxKdhLOOQ+qSc+QJ7o1usQVpBNAAAAABJRU5ErkJggg==);
            height: 30px;
            background-repeat: no-repeat;
            position: relative;
            left: 84px;
            top: 182px;
            cursor: pointer;
        }
        .add-2{
            left: 296px;
            top: 147px;
        }
        .add-3{
            left: 430px;
            top: 239px;
        }
  }
  .form{
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .form-details{
        display: flex;
    flex-direction: column;
    align-items: baseline; 
        input{
            border: none;
            border-bottom: 1px solid rgb(203, 201, 201);
            background-color: transparent;
            margin-right: 20px;
            padding-bottom: 8px;
        }
        .email{
            margin-top: 50px;
            margin-bottom: 30px;
            padding-bottom: 50px;
            width: 100%;
        }
        button{
            width: 150px;
            background-color: $hoverText;
            color: white;
            border: none;
            padding: 20px 30px 20px 30px;
            margin: 20px 20px 20px 0;
            text-transform: uppercase;
            font-weight: 600;
            cursor: pointer;
                &:hover{
                .fa-minus{
                display: none;            
                }
            .fa-arrow-right-long{
              transform: translateX(0x);
              margin-left: 5px;
            }
          }
        }
        .fa-minus{
          transform: rotate(90deg);
          margin-right: 20px;
          transition: all 1s;
        }
    }
    h3{
        font-size: 42px;
        padding-bottom: 10px;
        span{
            color: $hoverText;
        }
    }
    p{
        color: $paragColor;
        font-size: 22px;
        font-weight: 300;
        padding-bottom: 25px;
        &::after{
            content: "";
            display: block;
            width: 70px;
            height: 2px;
            background-color: #FF4612;
            margin-top: 10px;
                }
    }
  }
  .grid-5{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-bottom: 70px;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;

  
     .logos{
        position: relative;
        .imgLogo{
            cursor: pointer;
            &:hover{
                display: none;
            
            }
        }
            .imgHover{
                position: absolute;
                left: 0;
                cursor: pointer;
                &:hover{
                    display: block;
                    top: 0;
                    z-index: -1;
                }
            }
     }
  }
  </style>
  