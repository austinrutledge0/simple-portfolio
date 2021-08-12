<template>
  <HomePage msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HomePage from './components/HomePage.vue'
import './styles/global.css'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>

#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin-top: 60px;

}
</style>

