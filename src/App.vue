<template>
  <div id="app">
    <HeaderPortFolio />
    <router-view></router-view>
    <FooterPortFolio />
  </div>
</template>

<script>
import HeaderPortFolio from './components/Layout/Header'
import FooterPortFolio from './components/Layout/Footer'

export default {
  name: 'App',
  components: {
    HeaderPortFolio,
    FooterPortFolio,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
