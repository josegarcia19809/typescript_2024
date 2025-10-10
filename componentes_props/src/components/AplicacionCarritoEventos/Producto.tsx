import "./Producto.css"

type ProductoProps = {
    nombre: string;
    cantidad: number;
};

const Producto = ({ nombre, cantidad }: ProductoProps) => {
    
    const manejarSumar = () => {
        console.log("Sumar elementos: "+ nombre);
    }

    const manejarRestar = () => {
        console.log("Restar elementos: "+ nombre);
    }

    return (
        <>
            <section className="item-row">
                <span className="item-text">{nombre}</span>
                <button onClick={manejarSumar}>+1</button>
                <span>{cantidad}</span>
                <button onClick={manejarRestar}>-1</button>
            </section>
        </>
    );
};

export default Producto;
