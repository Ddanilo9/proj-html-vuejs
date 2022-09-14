<template>
  <div id="app">
    <MainHeader></MainHeader>
    <MainContent></MainContent>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainContent from './components/MainContent.vue';

export default {
  components: {
    MainHeader,
    MainContent
}
}
</script>

<style lang="scss">
@import '../src/styles/general.scss';
@import '../src/styles/variables.scss';
</style>
