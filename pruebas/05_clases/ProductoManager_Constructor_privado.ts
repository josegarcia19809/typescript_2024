class ProductoManager {
    private static instance: ProductoManager; // instancia única
    private productos: {
        id: number;
        name: string;
        price: number;
    }[] = []

    private constructor() {
        console.log("¡ProductoManager creado!")
    }

    // Método estático para obtener la única instancia
    public static getInstance(): ProductoManager {
        if (!ProductoManager.instance) {
            ProductoManager.instance = new ProductoManager();
        }
        return ProductoManager.instance;
    }

    // Métod0 para agregar un producto
    public addProducto(id: number, name: string, price: number) {
        this.productos.push({id, name, price});
        console.log(`Producto agregado: ${name} (${price}€)`);
    }

    // Métod0 para listar los productos
    public listProductos() {
        console.log('Lista de productos:');
        this.productos.forEach(producto => {
            console.log(`- ${producto.id}: ${producto.name} - ${producto.price}€`)
        })
    }

    // Métod0 para cambiar el precio de un producto
    public changePrice(id: number, newPrice: number) {
        // @ts-ignore
        const producto = this.productos.find((producto: { id: number; }) => producto.id === id);
        if (producto) {
            producto.price = newPrice;
            console.log(`Precio del producto "${producto.name}" actualizado a ${newPrice}€`);
        } else {
            console.log(`Producto con ID ${id} no encontrado.`);
        }
    }
}

// Uso del Singleton
const manager1 = ProductoManager.getInstance();
const manager2 = ProductoManager.getInstance();
const manager3 = ProductoManager.getInstance();

manager1.addProducto(1, "Laptop", 1200);
manager2.addProducto(2, 'Mouse', 25);
manager3.addProducto(3, 'Teclado', 45);

manager1.changePrice(2, 30);

// Comprobando si todas las instancias son la misma
manager1.listProductos()


console.log(manager1 === manager2 && manager2 === manager3);

/*
Explicación del Código:
Patrón Singleton:

La clase ProductoManager asegura que solo existe una instancia. Esto se logra mediante:
Un constructor private.
Un método estático getInstance que devuelve la instancia única.
Gestión de Productos:

Se utiliza un arreglo productos para almacenar los productos, cada uno representado por un
objeto con id, name y price.
Métodos:

addProducto: Agrega un nuevo producto.
listProductos: Lista todos los productos.
changePrice: Permite modificar el precio de un producto específico.
Uso del Singleton:

Se demuestra que manager1, manager2 y manager3 son la misma instancia,
compartiendo el mismo estado.
 */