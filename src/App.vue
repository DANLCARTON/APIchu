<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to APIchu"/>-->
  <h1>APICHU</h1>
  <PokemonGallery />
</template>

<script>
import PokemonGallery from './components/PokemonGallery.vue'

export default {
  name: 'App',
  components: {
    PokemonGallery
  }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/lemonmilk');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: 'Lemon/Milk', sans-serif;
}
h1 {
}
</style>
