import Tarjeta from "../components/Tarjeta/Tarjeta.tsx";

const PaginaTarjetas = () => {
    return (
        <div className="contenedor-tarjetas">
            <Tarjeta titulo="usuarios registrados" cantidad={120} activo={true}>
                <p>Última actualización: hace 5 minutos</p>
            </Tarjeta>
            <Tarjeta
                titulo="Pedidos pendientes"
                cantidad={8}
                activo={false}
            >
                <button>Ver pedidos</button>
            </Tarjeta>

            <Tarjeta
                titulo="Productos agotados"
                cantidad={45}
                activo={true}
            >
                <ul>
                    <li>Laptop Gamer</li>
                    <li>Mouse Inalámbrico</li>
                </ul>
            </Tarjeta>
        </div>
    );
};

export default PaginaTarjetas;