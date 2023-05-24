<template>
    <div>
      <img v-if="uniquePokeData && uniquePokeImg" v-bind:src="uniquePokeImg">
      <p v-if="uniquePokeData">#{{ uniquePokeData.id }}. <b>{{ realName }}</b></p>
    </div>
  </template>
  
  <script>
  import { getUniquePokeData, getUniquePokeSpeciesData } from '../services/api/pokeData';
  
  export default {
    name: "PokemonCard",
    props: {
      pokemonName: String,
    },
    data() {
      return {
        uniquePokeData: null,
        uniquePokeSpeciesData: null,
        uniquePokeImg: "",
        realName: "",
      };
    },
    methods: {
      async retrieveRealName(no) {
        this.uniquePokeSpeciesData = await getUniquePokeSpeciesData(no);
        this.realName = this.uniquePokeSpeciesData.name;
      },
      async retrieveSprite(no) {
        const tempPokeData = await getUniquePokeData(no);
        this.uniquePokeImg = tempPokeData.sprites.front_default;
      },
      async retrieveUniquePokemonData(name) {
        this.uniquePokeData = await getUniquePokeData(name);
        if (this.uniquePokeData) {
          this.retrieveRealName(this.uniquePokeData.id);
          this.uniquePokeImg = this.uniquePokeData.sprites.front_default;
        } else {
          this.uniquePokeData = await getUniquePokeSpeciesData(name);
          this.retrieveSprite(this.uniquePokeData.id);
          this.realName = this.uniquePokeData.name;
        }
      },
    },
    mounted() {
      this.retrieveUniquePokemonData(this.pokemonName);
    },
  };
  </script>
  
  <style scoped>
  p {
    text-transform: uppercase;
  }
  div {
    background-color: #efefef;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    min-width: 210px;
    transition: ease-in-out .2s;
  }
  div:hover {
    background-color: #46b6da;
    filter: drop-shadow(0 0 5px #00000080);
  }
  </style>