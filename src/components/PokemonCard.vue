<template>
    <div>
        <img v-bind:src="uniquePokeImg">
        <p>#{{ uniquePokeData.id }}. <b>{{ realName }}</b></p>
    </div>
</template>

<script>
    import { getUniquePokeData, getUniquePokeSpeciesData } from '../services/api/pokeData';
    export default {
        name:"PokemonCard",
        props: {
            pokemonName: String,
        },
        data() {
            return {
                uniquePokeData: [],
                uniquePokeSpeciesData: [],
                uniquePokeImg: "",
                realName: ""
                
            }
        },   
        methods: {
            async retrieveRealName (no) {
                console.log("please work", no)
                this.uniquePokeSpeciesData = await getUniquePokeSpeciesData(no)
                // console.log(pokemonSprite.id, pokemonSprite.name)
                this.realName = this.uniquePokeSpeciesData.name
                console.log("stp stp stp", this.realName)
            },
            async retrieveUniquePokemonData (name) {
                console.log(name)
                this.uniquePokeData = await getUniquePokeData(name);
                // console.log("this.uniquePokeData\n", this.uniquePokeData)4
                this.uniquePokeImg = this.uniquePokeData.sprites.front_default;
                if (this.uniquePokeData.name.length <= 12) {
                    this.realName = this.uniquePokeData.name;
                } else {
                    this.retrieveRealName(this.uniquePokeData.id)
                }
            },
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