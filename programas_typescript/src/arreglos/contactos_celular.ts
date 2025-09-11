// contactos_celular.ts

const contactos: string[] = ["Luis", "Ana", "Carolina", "María"]

contactos.forEach((contacto, index) => {
    console.log(`${index + 1}. ${contacto}`);
});

// Eliminar el último
contactos.pop();
console.log(`Contactos actualizados: ${contactos}`);
