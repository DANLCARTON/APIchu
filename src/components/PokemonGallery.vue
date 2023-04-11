<template>
    <div class="gallery">
        <!--<p v-for="pokemon in pokeData.results" :key="pokemon">{{ pokemon.name }}</p>-->
        <PokemonCard v-for="pokemon in pokeData.results" :key="pokemon" :pokemonName="pokemon.name"></PokemonCard>
    </div>
</template>

<script>
import { getPokeData } from '../services/api/pokeData.js';
import PokemonCard from "./PokemonCard.vue";
export default {
    name: "PokemonGallery",
    components: {
        PokemonCard
    },
    data() {
        return {
            pokeData: []
        }
    },
    methods: {
        async retrievePokeData() {
            this.pokeData = await getPokeData()
            console.log(this.pokeData.results[0])
        }
    },
    mounted() {
        this.retrievePokeData()
    }
}
</script>

<style scoped>
.gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>