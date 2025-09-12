// peliculas_vistas.ts

const peliculas: string[] = ['Avatar', 'Titanic', 'Inception'];

// Ejercicio: Verifica si la película "Inception" está en la lista.
const buscada = "Inception";
let encontrada = false;


peliculas.forEach(pelicula => {
    if (pelicula === buscada) {
        encontrada = true;
    }
})

console.log("¿Está 'Inception' en la lista?", encontrada);
