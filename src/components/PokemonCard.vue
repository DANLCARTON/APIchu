<template>
    <div>
        <img v-bind:src="uniquePokeImg">
        <p>#{{ uniquePokeData.id }}. <b>{{ pokemonName }}</b></p>
    </div>
</template>

<script>
    import { getUniquePokeData } from '../services/api/pokeData';
    export default {
        name:"PokemonCard",
        props: {
            pokemonName: String
        },
        data() {
            return {
                uniquePokeData: [],
                uniquePokeImg: ""
            }
        },
        methods: {
            async retrieveUniquePokemonData (name) {
                console.log(name)
                this.uniquePokeData = await getUniquePokeData(name);
                this.uniquePokeImg = this.uniquePokeData.sprites.front_default;
                // console.log("this.uniquePokeData\n", this.uniquePokeData)
                this.imgUrl = this.uniquePokeData.sprites.front_default
            }
        },
        mounted() {
            this.retrieveUniquePokemonData(this.pokemonName)
        }
    }
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
        filter: drop-shadow(0 0 5px #00000080)
    }
</style>