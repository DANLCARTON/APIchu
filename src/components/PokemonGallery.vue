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
        sortValue: String,
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
                console.log(this.filteredPokeData)
            }
            this.sortPokeData();
        },
        getId(url) {
            let data;
            if (this.genValue == "all") data = url.match(/pokemon\/(\d+)\//);
            else data = url.match(/pokemon-species\/(\d+)\//)

            if (data) return parseInt(data[1]);
            return null;
        },
        sortPokeData() {
            if (this.sortValue == "id") this.filteredPokeData.sort((a, b) => this.getId(a.url) > this.getId(b.url) ? 1 : -1);
            else if (this.sortValue == "Aid") this.filteredPokeData.sort((a, b) => this.getId(a.url) < this.getId(b.url) ? 1 : -1);
            else if (this.sortValue == "name") this.filteredPokeData.sort((a, b) => a.name > b.name ? 1 : -1);
            else if (this.sortValue == "Aname") this.filteredPokeData.sort((a, b) => a.name < b.name ? 1 : -1);
        }
    },

    mounted() {
        this.retrievePokeData()
    },
    watch: {
        genValue() {
            this.filterPokeData();
        },
        sortValue() {
            this.sortPokeData();
        }
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