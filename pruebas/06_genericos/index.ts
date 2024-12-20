export {Hero} from './hero';
export {Villain} from './villain';

import {getPokemon} from "./interfaces/pokemon";

getPokemon(1)
    .then(pokemon => {
        console.log(pokemon);
    })
    .catch(error => {
        console.log(error);
    })
