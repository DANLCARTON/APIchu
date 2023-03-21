<template>
    <div class="tkt">
        <div>
            <p>{{ pokeData }}</p>
            <p v-for="pokemon in pokeData" :key="pokemon.results.id">{{ pokemon.results }}</p>
        </div>
    </div>
</template>

<script>
import { getPokeData } from '../services/api/pokeData.js';
export default {
    name: "PokemonGallery",
    data() {
        return {
            pokeData: {}
        }
    },
    methods: {
        async retrievePokeData() {
            this.pokeData = await getPokeData()
            console.log(this.pokeData)
        },
    }
}
</script>