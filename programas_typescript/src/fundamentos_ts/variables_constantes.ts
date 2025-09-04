// 💻 Creado por: José Luis García Morales
// 📅 Fecha: septiembre 04, 2025

// ------------------------------USO DE VAR------------------------------
console.log("🦸‍♂️ ------------------ USO DE VAR ------------------ 🦸‍♀️");

var heroe: string = "Batman 🦇";
var heroe: string = "Superman 🦸‍♂️"; // ⚠️ Se permite volver a declarar con var

console.log(`📝 Héroe elegido: ${heroe}`);
// ⚠️ Aunque funciona, ¡ya no se recomienda usar var!

// ------------------------------USO DE LET------------------------------
console.log("🧠 ------------------ USO DE LET ------------------ 🧠");

let academia: string = "Escuela para Jóvenes Mutantes 🎓";
// let academia: string = "Escuela de Vengadores"; ❌ Esto daría error si se descomenta

console.log(`🏫 Academia actual: ${academia}`);

let enemigo: string = "Guasón 🤡"
console.log(enemigo);


// ------------------------------USO DE CONST------------------------------
console.log("🛡️ ------------------ USO DE CONST ------------------ 🛡️");

const guarida: string = "Fortaleza de la Soledad 🧊";
// guarida = "Batcueva"; ❌ Esto daría error si se intenta cambiar

console.log(`🏠 Guarida secreta: ${guarida}`);
