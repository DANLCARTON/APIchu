<template>
    <div v-if="pokeData && pokeData.length !== 0" id="pokemonInfoCard">

        <img v-if="pokeData.sprites" v-bind:src="pokeData.sprites.other.home.front_default" alt="front default sprite">
        <h2> #{{pokeData.id}} • {{ pokeData.name }}</h2>
        <p> <span v-for="type in pokeData.types" :key="type"> • {{ type.type.name }} </span></p>
        <p v-for="stat in pokeData.stats" :key="stat"> {{ stat.stat.name }} • {{ stat.base_stat }} </p>

        <div v-if="pokeSpeciesData && pokeSpeciesData.length !== 0">
            <div v-for="entries in pokeSpeciesData.flavor_text_entries" :key="entries" class="pokedexDescriptions">
                <div v-if="entries.language.name == 'en'">
                    <p class="version"> Pokemon {{ entries.version.name }} </p>
                    <p class="pokedexDescriptionText">{{ entries.flavor_text }}</p>    
                </div>
            </div>
        </div>

    </div>

    <div v-else id="pokemonInfoCard">
        <p>no data matching {{ researchValue }}</p>
    </div>
</template>

<script>
import { getUniquePokeData, getUniquePokeSpeciesData } from '@/services/api/pokeData'
export default {
    name: "pokemonInfo",
    props: {
        researchValue: String,
    },
    data() {
        return {
            pokeData: [],
            pokeSpeciesData: [],
            searchTimeout: null,
        }
    },
    methods: {
        async retrievePokeData() {
            if (this.researchValue == "") {
                return;
            } else {
                clearTimeout(this.searchTimeout); 
                this.searchTimeout = setTimeout(async () => {
                    this.pokeData = await getUniquePokeData(this.researchValue)
                    this.pokeSpeciesData = await getUniquePokeSpeciesData(this.researchValue)
                }, 500); 
            }
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

#pokemonInfoCard {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    filter: drop-shadow(0 0 5px #00000080)
}

img {
    max-width: 80%;
    filter: drop-shadow(0 0 5px #00000080)
}

.pokedexDescriptions {
    text-align: left;
}

.pokedexDescriptionText {
    font-family: "Space Grotesk";
}

</style>