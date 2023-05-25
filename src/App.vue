<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to APIchu"/>-->
  <headerBar></headerBar>
  <div id="title">
    <h1>APICHU</h1>
  </div>
  <div>
    <select v-model="generation" name="generationPicker" id="optionGen">
      <option value="all">All Pokemon</option>
      <option value="gen1">Generation I</option>
      <option value="gen2">Generation II</option>
      <option value="gen3">Generation III</option>
      <option value="gen4">Generation IV</option>
      <option value="gen5">Generation V</option>
      <option value="gen6">Generation VI</option>
      <option value="gen7">Generation VII</option>
      <option value="gen8">Generation VIII</option>
      <option value="gen9">Generation IX</option>
    </select>
    <select v-model="sort" name="sortPicker" id="optionSort">
      <option value="id">#0001. → #1010.</option>
      <option value="Aid">#1010. → #0001. </option>
      <option value="name">Abomasnow → Zygarde</option>
      <option value="Aname">Zygarde → Abomasnow</option>
    </select>
    <input type="text" v-model="pokemonName" placeholder="e.g. 172 or Pichu" id="researchBar">
  </div>
  <pokemonInfo :researchValue="pokemonName"></pokemonInfo>
  <PokemonGallery :genValue="generation" :sortValue="sort"></PokemonGallery>
  <footerFoot></footerFoot>
</template>

  <script>
  import headerBar from './components/headerBar.vue'
  import PokemonGallery from './components/PokemonGallery.vue'
  import pokemonInfo from './components/pokemonInfo.vue'
  import footerFoot from './components/footer.vue'

  export default {
    name: 'App',
    components: {
      PokemonGallery,
      headerBar,
      footerFoot,
      pokemonInfo
    },
    data() {
      return {
        generation: "all",
        sort: "id",
        pokemonName: ""
      }
    }
  }
  </script>

<style>
@import url('https://fonts.cdnfonts.com/css/lemonmilk');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-family: 'Lemon/Milk', sans-serif;
}
#title {
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
}
h1 {
  width: 50vw;
  font-size: 4.5em;
  color: #46b6da;
  height: 100px;
}
select {
  background-color: white;
  border-top: 3px solid #46b6da;
  border-bottom: 3px solid #46b6da;
  border-left: none;
  border-right: none;
  font-size: 16px;
  font-family: "Space Grotesk";
}
select option {
  font-family: Helvetica, Arial, sans-serif;
}
#researchBar {
  font-family: "Space Grotesk";
  font-size: 16px;
  border-top: 3px solid #46b6da;
  border-bottom: 3px solid #46b6da;
  border-left: none;
  border-right: none;
}

select, input {
  margin: 0 10px 20px 10px;
}

</style>
