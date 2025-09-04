const cancion: string = "Bohemian Rhapsody";
const artista: string = "Queen";

// Quiero saber cuántas letras tiene el nombre de la canción

console.log("Número de letras", cancion.length);
console.log(`Número de letras: ${cancion.length}`);

const letraCancion: string = `
Is this the real life? Is this just fantasy?
Caught in a landslide, no escape from reality
Open your eyes, look up to the skies and see
I'm just a poor boy, I need no sympathy
Because I'm easy come, easy go
Little high, little low
Any way the wind blows doesn't really matter to me, to me
`;

const letraAbreviada =
    letraCancion.length > 50 ?
        letraCancion.slice(0, 50) + "..." :
        letraCancion;
console.log(letraAbreviada);
