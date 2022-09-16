<template>
    <footer class="footer">
        <div class="container grid-4">
            <div class="about">
                <h4 class="serif">About</h4>
                <p>We created Everlead to effectively become the stepping stone towards meeting all your goals & achieving business success.</p>
                <div>
                    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                </div>
            </div>
            <div class="twitter">
                <h4 class="serif">Twitter</h4>
                <div class="d-flex">
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                    <p>@ahmetozsu Hi, did you open a ticket at https://t.co/MJPUTVtwXy? If so, please send me ticketID in DM, and if not p… https://t.co/4f57F9MgGB</p>
                </div>
                <div class="d-flex"> 
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                    <p><a href=""> @ahmetozsu</a><a href=""> @envato @envato_help</a><a href=""> @EnvatoStudio</a>sure, send it to DM</p>
                </div>
            </div>
            <div class="links-i">
                <h4 class="serif">Important Links</h4>
                <ul>
                    <li><a href="">About me</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Language Packs</a></li>
                    <li><a href="">Become a coach</a></li>
                    <li><a href="">Monthly events</a></li>
                </ul>
            </div>
            <div class="contact-me">
                <h4 class="serif">Contact me</h4>
                <ul>
                    <li>
                        <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                        <span>457 BigBlue Street, NY 10013</span>
                    </li>
                    <li>
                        <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
                        <span>(315) 5512-2579</span>
                    </li>
                    <li>
                        <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                        <span><a href="">everlead@qodeinteractive.com</a></span>
                    </li>
                </ul>
                <div style="position: relative;">
                    <input type="text" placeholder="Your Name">
                    <button style="position:absolute">SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div style="margin-top:70px; background-color: #FF4612" >
            <p style="text-align:center; padding: 5px 0;" >© 2022 Qode Interactive, All Rights Reserved</p>
        </div>
    </footer>
  </template>
  
  <script>
 export default {
  }

  </script>
  
  
<style scoped lang="scss">
  @import '../styles/variables.scss';
.grid-4{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 0px;

    .about{
        .icon{
            color: white;
            padding-right: 9px;
            padding-top: 20px;
            cursor: pointer;

            &:hover{
                color: #FF4612;
            }
        }
    }
    .twitter{
        .icon{
            align-self: baseline;
            padding-top: 3px;
            color: #FF4612;
            padding-right: 10px;
        }
        p{
            padding-bottom: 20px;
        }
    }
    .links-i{
        li{
            padding-bottom: 8px;
        }
    }
    .contact-me{
        .icon{
            padding-top: 3px;
            color: #FF4612;
            padding-right: 10px;
            cursor: pointer;
        }
        li{
            padding-bottom: 8px;
        }
        input{
            border: none;
            margin-top: 30px;
            background-color: transparent;
            border-bottom: 1px solid gray;
            width: 100%;
        }
        button{
            border: none;
            background: transparent;
            color: white;
            bottom: 0;
            right: 0;
            cursor: pointer;
        }
    }
    h4{
        font-size: 19px;

        &::after{
        content: "";
        display: block;
        width: 40px;
        height: 2px;
        background-color: #FF4612;
        margin: 20px 0;
        }
    }
    p ,li, a{
        color: $paragColor;
    }
}
footer{
    padding-top: 70px;
    background-color: #181515;
    color: #FFFFFF;
}
</style>
  