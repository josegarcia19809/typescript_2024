function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

// printName({first: 'John', last: 'García', age: 12}); ADVERTENCIA!!!!!!!

const singer = {first: 'Mick', last: 'Jagger', age: 32, isAlive: true};
printName(singer);

/*
La advertencia ocurre porque TypeScript hace type checking estructuralmente.
Aquí hay dos situaciones a considerar:

1. Llamada con un objeto literal

printName({first: 'John', last: 'García', age: 12});
Esto genera una advertencia de tipo en exceso (Excess Property Checking).
TypeScript no permite que los objetos literales tengan propiedades adicionales si
el tipo esperado no las tiene. Como printName solo espera un objeto con first y last,
la propiedad extra age hace que TypeScript muestre una advertencia.

Solución:

Omitir age en el objeto literal.
Asignar primero el objeto a una variable antes de pasarlo a la función.

2. Llamada con una variable (singer)

const singer = {first: 'Mick', last: 'Jagger', age: 32, isAlive: true};
printName(singer);
Aquí no hay advertencia, porque TypeScript solo verifica que singer tenga al menos first y last.
Las propiedades extra (age, isAlive) son ignoradas, ya que TypeScript permite objetos con más
propiedades cuando se pasan mediante una variable.

Explicación clave:

Los objetos literales se verifican estrictamente (no pueden tener propiedades extra).
Las variables pueden tener propiedades extra porque TypeScript solo revisa si cumplen con la
estructura mínima.
 */