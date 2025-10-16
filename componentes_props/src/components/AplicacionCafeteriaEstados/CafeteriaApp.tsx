import "./CafeteriaApp.css";
import ContadorCafe from "./ContadorCafe";

type Bebida = {
    tipoCafe: string;
    cantidadInicial: number;
    imagen: string;
};

const bebidas: Bebida[] = [
    { tipoCafe: "Expresso", cantidadInicial: 1, imagen: "/images/expresso.jpg" },
    { tipoCafe: "Americano", cantidadInicial: 4, imagen: "/images/americano.jpg" },
    { tipoCafe: "Cappuccino", cantidadInicial: 6, imagen: "/images/cappuccino.jpg" },
    { tipoCafe: "Bombón", cantidadInicial: 7, imagen: "/images/bombon.jpg" },
    { tipoCafe: "Carajillo", cantidadInicial: 2, imagen: "/images/carajillo.jpg" },
];

const CafeteriaApp = () => {
    return (
        <div className="cafeteria-fondo">
            <h1 className="cafeteria-titulo">☕ Bienvenido a Cafetería El Buen Aroma 🌿</h1>
            <div className="cafeteria-lista">
                {bebidas.map(({ tipoCafe, cantidadInicial, imagen }) => (
                    <ContadorCafe
                        key={tipoCafe}
                        tipoCafe={tipoCafe}
                        cantidadInicial={cantidadInicial}
                        imagen={imagen}
                    />
                ))}
            </div>
        </div>
    );
};

export default CafeteriaApp;
