// lista_mascotas.ts

// Una tienda de mascotas quiere mostrar su catálogo en un menú digital en letras mayúsculas. (6 mascotas)

const mascotas: string[] = ["Solovino 🐕", "Mixi 🐈", "Veloz 🐢", "pollito pío 🐥", "René 🐸", "Fogoso 🐉"]

mascotas.forEach((mascota, index) => {
    console.log(`${index+1}. ${mascota.toUpperCase()}`);    
})

