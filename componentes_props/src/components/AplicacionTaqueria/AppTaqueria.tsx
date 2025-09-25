import DespedidaTaqueria from "./DespedidaTaqueria";
import EncabezadoTaqueria from "./EncabezadoTaqueria";
import TacoFavorito from "./TacoFavorito";

const AppTaqueria = () => {
    return (
        <div>
            <EncabezadoTaqueria titulo="🌮 Bienvenidos a la taqueria Los Reactos"/>
            <TacoFavorito taco="queso 🧀🌮"/>
            <TacoFavorito taco="papa 🥔🌮"/>
            <TacoFavorito taco="bistec 🥩🌮"/>
            <DespedidaTaqueria nota="🔥 Gracias por tu visita, ¡Buen provecho!"/>
        </div>
    );
};

export default AppTaqueria;
