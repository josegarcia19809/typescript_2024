import "./RestauranteApp.css";
import ContadorPedidos from "./ContadorPedidos";

type Pedido = {
    platillo: string;
    pedidosIniciales: number;
    imagen: string;
};

const pedidos: Pedido[] = [
    {platillo: "Tacos al pastor", pedidosIniciales: 4, imagen: "/images/tacos.jpg"},
    {platillo: "Enchiladas suizas", pedidosIniciales: 5, imagen: "/images/enchiladas.jpg"},
    {platillo: "Mole Poblano", pedidosIniciales: 3, imagen: "/images/mole.jpg"},
    {platillo: "Tortas campechanas", pedidosIniciales: 1, imagen: "/images/tortas.jpg"},
    {platillo: "Chiles en nogada", pedidosIniciales: 0, imagen: "/images/chiles.jpg"},
];

const RestauranteApp = () => {
    return (
        <div className="restaurante-fondo">
            <h1 className="restaurante-titulo">🌮 Restaurante La Buena Olla 🥘</h1>
            <div className="restaurante-lista">
                {pedidos.map(({platillo, pedidosIniciales, imagen}) => (
                    <ContadorPedidos
                        key={platillo}
                        platillo={platillo}
                        pedidosIniciales={pedidosIniciales}
                        imagen={imagen}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestauranteApp;
