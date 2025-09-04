const titulo: string = "Don Quijote de la Mancha";

console.log("Titulo: ", titulo);
console.log("-".repeat(50));

console.log(`Longitud del título ${titulo.length}`);

const descripcion =`
Don Quijote de la Mancha es Alonso Quijano, un hidalgo cincuentón de la Mancha que enloquece por leer novelas de caballerías y decide convertirse en caballero andante. Se caracteriza por ser alto y flaco, con bigotes grandes y una nariz aguileña y corva. Físicamente, es de complexión recia y rostro seco, enjuto. Psicológicamente, es un visionario con una imaginación desbordada que modifica la realidad, pero también tiene momentos de gran lucidez y sabiduría. 
`;

const resumen = descripcion.length > 20
  ? descripcion.slice(0, 20) + "..."
  : descripcion;

console.log(`Resumen: ${resumen}`);

const precio: number = 200.00;

console.log(`El precio es $${precio}`);

console.log(`Longitud de precio: ${precio.toString().length}`);


