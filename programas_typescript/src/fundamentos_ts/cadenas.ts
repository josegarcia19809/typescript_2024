// 📚 Bienvenido al mundo encantado de las cadenas de texto (strings)

// 🧵 Las cadenas son simplemente textos que guardamos en variables.
// Podemos escribirlas con comillas dobles " " o simples ' '

const titulo: string = "Don Quijote de la Mancha";

console.log("Titulo: ", titulo);
console.log("-".repeat(100));

// 🔠 ¿Cuántas letras tiene el título? ¡Veamos!
console.log(`Longitud del título ${titulo.length}`);

const descripcion = `
Don Quijote de la Mancha es Alonso Quijano, un hidalgo cincuentón de la Mancha que enloquece por leer novelas de caballerías y decide convertirse en caballero andante. Se caracteriza por ser alto y flaco, con bigotes grandes y una nariz aguileña y corva. Físicamente, es de complexión recia y rostro seco, enjuto. Psicológicamente, es un visionario con una imaginación desbordada que modifica la realidad, pero también tiene momentos de gran lucidez y sabiduría. 
`;


/*El siguiente código usa el operador ternario (condición ? valorSiTrue : valorSiFalse) para crear un resumen de texto.

descripcion.length > 20
Revisa si la cadena descripcion tiene más de 20 caracteres.

Si la condición es verdadera (true)
Aplica descripcion.slice(0, 20) → toma los primeros 20 caracteres.
Luego le agrega "..." al final, para indicar que el texto fue recortado.

Si la condición es falsa (false)
Significa que la cadena tiene 20 caracteres o menos.
En ese caso, devuelve la cadena completa sin cambios.*/
const resumen = descripcion.length > 20
    ? descripcion.slice(0, 20) + "..."
    : descripcion;

console.log(`Resumen: ${resumen}`);

const precio: number = 200.00;

/*El siguiente console.log muestra el precio con el signo de $.
El segundo muestra cuántos caracteres tiene el número convertido a cadena.
 */
console.log(`El precio es $${precio}`);

console.log(`Longitud de precio: ${precio.toString().length}`);


