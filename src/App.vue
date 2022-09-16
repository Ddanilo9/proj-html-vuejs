<template>
  <div id="app">
    <MainHeader></MainHeader>
    <MainContent></MainContent>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainContent from './components/MainContent.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainContent,
    MainFooter
}
}
</script>

<style lang="scss">
@import '../src/styles/general.scss';
@import '../src/styles/variables.scss';
</style>
