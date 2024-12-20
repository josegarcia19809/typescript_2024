import {getPokemon} from ".";

getPokemon(1)
    .then(pokemon => {
        console.log(pokemon.name);
    })
    .catch(error => {
        console.log(error);
    })