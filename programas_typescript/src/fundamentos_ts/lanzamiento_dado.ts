//------------------------------------------------- Math
// Mostrar mensaje de inicio
console.log("🎲 Lanzando el dado...");

// Generar número aleatorio del 1 al 6
let resultado: number = Math.floor(Math.random() * 6) + 1;

// Mostrar resultado
console.log(`Has sacado un ${resultado}`);

// Verificar si ganó
if (resultado === 6) {
    console.log("🎉 ¡Ganaste! ¡Has sacado un 6!");
} else {
    console.log("😅 No fue un 6, sigue intentando...");
}
