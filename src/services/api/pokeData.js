const getPokeData = async() => {
    // const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0")
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0")
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

const getUniquePokeData = async(name) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    if (response.status == 200) {
        return response.json();
    } else {
        new Error(response.statusText);
    }
}

// faire une fonction qui récupère l'artwork / le sprite du pokémon

export { getPokeData, getUniquePokeData };