import Tarjeta from "./Tarjeta";

const AppTarjeta = () => {
    return (
        <div>
            <Tarjeta titulo="Usuarios registrados" cantidad={120} activo={true}/>

            <Tarjeta titulo="Pedidos pendientes" cantidad={8} activo={false}/>

            <Tarjeta titulo="Productos agotados" cantidad={45} activo={true}/>
        </div>
    );
};

export default AppTarjeta;
