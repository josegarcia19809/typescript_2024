type ArticuloCarritoProps = {
    nombre: string;
    cantidad?: number;
};

const ArticuloCarrito = ({nombre, cantidad = 1,}: ArticuloCarritoProps) => {
    return (
        <>
            <section>
                <span style={{color: cantidad === 1 ? 'red' : 'black'}}>
                  {nombre}
                </span>
                <span>{cantidad}</span>
            </section>
        </>
    );
};

export default ArticuloCarrito;
