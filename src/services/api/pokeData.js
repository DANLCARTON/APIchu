const getPokeData = async() => {
    // const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0")
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0")
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

const getPokeDataByGen = async(gen) => {
    const response = await fetch("https://pokeapi.co/api/v2/generation/" + gen)
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

const getUniquePokeData = async(no) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + no)
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

const getUniquePokeSpeciesData = async(no) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + no)
    if (response.status == 200) {
        return response.json()
    } else {
        new Error(response.statusText)
    }
}

export { getPokeData, getUniquePokeData, getUniquePokeSpeciesData, getPokeDataByGen };