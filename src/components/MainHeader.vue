<template>
  <header class="header d-flex">
    <figure>
      <img class="logo" :src="logo" alt="">
    </figure>
    <div class="menu d-flex">
      <ul class="list-menu d-flex">
        <li @click="activeLink(i)" 
        :class="'link-menu'"
        v-for="(link, i) in links" :key="i">
        <a
        :class="['d-flex', active == i ? 'active' : '']">
            <font-awesome-icon
            :class="[active == i ? 'visible' : '']"
             icon="fa-solid fa-arrow-right-long " />
            {{link.text}}</a>
        </li>
      </ul>
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />>
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
  </header>
  
</template>

<script>
import logo from '../assets/img/logo-img-01.png'
import search from '../assets/img/768px-OOjs_UI_icon_search-ltr.svg.png'


export default {
data(){
  return{
    active: 0,
    logo: logo,
    search: search,
    links: [
            {
                text: 'Homes',
                href: '#nogo'
            },
            {
                text: 'Pages',
                href: '#nogo'
            },
            {
                text: 'Blog',
                href: '#nogo'
            },
            {
                text: 'Shops',
                href: '#nogo'
            },
            {
                text: 'Events',
                href: '#nogo'
            },
            {
                text: 'Elements',
                href: '#nogo'
            },
            ]
  }
},
methods: {
  activeLink(index){
    this.active = index
    console.log(this.active)
  }
},
}
</script>


<style scoped lang="scss">
@import '../styles/variables.scss';

.header{
  padding: 35px 56px;
  justify-content: space-between;
  position: absolute;
        top: 0;
        right: 0;
        left: 0;
  
  .logo{
    width: 135px;
  }
  .menu{
    .list-menu{
      
      .fa-arrow-right-long{
        display: none;
        color: $hoverText;
        margin-right: 5px;
        transition: all 0.3s;
      }
      a{
        color: $textColor;
        text-transform: uppercase;
        font-size: 15px;
        line-height: 23px;
        font-weight: 600;
        padding: 0 22px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover{
          color: $hoverText;
          transition: all 0.3s;
          .fa-arrow-right-long {
            transition: all 0.3s;
            display: inline-block;
          }
        }
        
      }
      .active{
          color: $hoverText;
      }
    }
    .fa-magnifying-glass{
      margin-right: 22px;
      transform: rotate(90deg);
      cursor: pointer;
      transition: all 0.3s;
      &:hover{
          color: $hoverText;
        }
    }
    .fa-bars{
      cursor: pointer;
      transition: all 0.3s;
      &:hover{
          color: $hoverText;
        }
    }
  }
  
}
</style>
