import { createApp } from 'vue'
import App from './App.vue'

import { getPokeData } from './services/api/pokeData.js'

let toto = {}
const foo = async () => {
    toto = await getPokeData()
}
foo()

console.log(toto)


createApp(App).mount('#app')
