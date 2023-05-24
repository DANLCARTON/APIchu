<template>
    <div class="gallery">
        <!--<p v-for="pokemon in pokeData.results" :key="pokemon">{{ pokemon.name }}</p>-->
        <PokemonCard v-for="pokemon in filteredPokeData" :key="pokemon" :pokemonName="pokemon.name"></PokemonCard>
    </div>
</template>

<script>
import { getPokeData, getPokeDataByGen } from '../services/api/pokeData.js';
import PokemonCard from "./PokemonCard.vue";
export default {
    name: "PokemonGallery",
    components: {
        PokemonCard 
    },
    props: {
        genValue: String,
    },
    data() {
        return {
            pokeData: [],
            filteredPokeData: []
        }
    },
    methods: {
        async retrievePokeData() {
            this.pokeData = await getPokeData()
            this.filterPokeData();
        },
        async filterPokeData() {
            if (this.genValue == "all") {
                this.filteredPokeData = this.pokeData.results;
            } else {
                const gen = this.genValue.substring(3)
                this.filteredPokeData = await getPokeDataByGen(gen);
                this.filteredPokeData = this.filteredPokeData.pokemon_species;
            }
        },
    },

    mounted() {
        this.retrievePokeData()
    },
    watch: {
        genValue() {
            this.filterPokeData();
        },
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