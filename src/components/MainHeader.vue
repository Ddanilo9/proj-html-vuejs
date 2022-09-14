<template>
  <header class="header d-flex">
    <figure>
      <img class="logo" :src="logo" alt="">
    </figure>
    <div class="menu d-flex">
      <ul class="list-menu d-flex">
        <li class="link-menu"
        v-for="(link, i) in links" :key="i">
          <a :href="link.href">
            <img class="arrow" :src="arrow" alt="" width="20px">
            {{link.text}}</a>
        </li>
      </ul>
      <img class="search" :src="search" alt="" width="16px" height="16px">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
  </header>
  
</template>

<script>
import logo from '../assets/img/logo-img-01.png'
import search from '../assets/img/768px-OOjs_UI_icon_search-ltr.svg.png'
import arrow from '../assets/img/pngfind.com-pointer-icon-png-5910751 (1).png'

export default {
data(){
  return{
    logo: logo,
    search: search,
    arrow: arrow,
    links: [
            {
                text: 'Homes',
                href: 'homes'
            },
            {
                text: 'Pages',
                href: 'pages'
            },
            {
                text: 'Blog',
                href: 'blog'
            },
            {
                text: 'Shops',
                href: 'shops'
            },
            {
                text: 'Events',
                href: 'events'
            },
            {
                text: 'Elements',
                href: 'elements'
            },
            ]
  }
}
}
</script>


<style scoped lang="scss">
@import '../styles/variables.scss';
.header{
  padding: 30px 56px;
  justify-content: space-between;
  
  .logo{
    width: 135px;
  }
  .menu{
    .list-menu{
      
      .arrow{
        display: none;
        color: $hoverText;
      }
      a{
        color: $textColor;
        text-transform: uppercase;
        font-size: 15px;
        line-height: 23px;
        font-weight: 600;
        padding: 0 22px;

        &:hover{
          color: $hoverText;
          .arrow {
            display: inline-block;
        }
        }
      }
    }
    .search{
      margin-right: 22px;
      rotate: 90deg;
      cursor: pointer;

      // &:hover{
      //     color: $hoverText;
      //   }
    }
  }
  
}
</style>
