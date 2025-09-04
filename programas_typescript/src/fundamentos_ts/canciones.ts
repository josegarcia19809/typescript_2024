// 🎶 Bienvenido al mundo encantado de las canciones (strings)
const cancion: string = "Bohemian Rhapsody";
const artista: string = "Queen";

console.log("🎤 Canción:", cancion);
console.log("🎸 Artista:", artista);

// 🔠 ¿Cuántas letras tiene el nombre de la canción?
console.log("Número de letras", cancion.length);
console.log(`📏 La canción "${cancion}" tiene ${cancion.length} caracteres.`);

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


// 🔤 Cambiando el estilo del texto
console.log("--------------------------------------------------");
console.log("🔡 Original:", cancion);
console.log("🔠 En MAYÚSCULAS:", cancion.toUpperCase());
console.log("🔡 en minúsculas:", cancion.toLowerCase());
