import BienvenidaAutomovil from "./BienvenidaAutomovil.tsx";
import AutoFavorito from "./AutoFavorito.tsx";
import CierreAutomovil from "./CierreAutomovil.tsx";

function AppAutomovil() {
    return (
        <div style={{fontFamily: "system-ui", lineHeight: 1.5}}>
            <BienvenidaAutomovil mensaje="🚗 Bienvenido al mundo de los autos"/>
            <AutoFavorito marca="🛞 Mi auto favorito es el Ferrari"/>
            <CierreAutomovil consejo="🛠️ Maneja con cuidado siempre"/>
        </div>
    );
}

export default AppAutomovil;