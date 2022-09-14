<template>
  <header class="header d-flex">
    <figure>
      <img class="logo" :src="logo" alt="">
    </figure>
    <div class="menu d-flex">
      <ul class="list-menu d-flex">
        <li class="link-menu"
        v-for="(link, i) in links" :key="i">
          <a class="d-flex" :href="link.href">
            <font-awesome-icon icon="fa-solid fa-arrow-right-long " />
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


export default {
data(){
  return{
    logo: logo,
    search: search,
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
      
      .fa-arrow-right-long{
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
