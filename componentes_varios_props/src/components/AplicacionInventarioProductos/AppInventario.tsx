import Producto from "./Producto"

const AppInventario = () => {
  return (
      <div>
          <h1>🍿💻Inventario de productos</h1>
          <Producto stock={50} nombre="Laptop" disponible={true} />
          <Producto stock={12} nombre="Teclado mecánico" disponible={true} />
          <Producto stock={0} nombre="Mouse inalámbrico" disponible={false} />
          
    </div>
  )
}

export default AppInventario