const libro: { titulo: string; autor: string; paginas: number } = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
};

// Ejercicio: Muestra título y autor en formato "Titulo - Autor".
console.log(`${libro.titulo} - ${libro.autor}`);
