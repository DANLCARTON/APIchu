<template>
    <div v-if="pokeData && pokeData.length !== 0">
        <img v-if="pokeData.sprites" v-bind:src="pokeData.sprites.other.home.front_default" alt="font default sprite">
        <h2> #{{pokeData.id}} • {{ pokeData.name }}</h2>
        <p> <span v-for="type in pokeData.types" :key="type"> • {{ type.type.name }} </span></p>
    </div>
</template>

<script>
import { getUniquePokeData } from '@/services/api/pokeData'
export default {
    name: "pokemonInfo",
    props: {
        researchValue: String,
    },
    data() {
        return {
            pokeData: [],
        }
    },
    methods: {
        async retrievePokeData() {
            this.pokeData = await getUniquePokeData(this.researchValue)
        },
    },
    mounted() {
        this.retrievePokeData()
    },
    watch: {
        researchValue() {
            this.retrievePokeData()
        }
    }
}
</script>

<style scoped>

div {
    background: #46b6da;
    color: white;
    max-width: 420px;
    margin: auto;
}

img {
    max-width: 80%;
    filter: drop-shadow(0 0 5px #00000080)
}

</style>