const getPokeData = async () => {
    // const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0")
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/chien-pao")
    if (response.status == 200) {
        return response.json();
    } else {
        new Error (response.statusText);
    }
}

export {getPokeData};