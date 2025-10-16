import ContadorGoles from "./ContadorGoles";
import "./TorneoApp.css";

type Jugador = {
    nombre: string;
    golesIniciales: number;
    foto: string;
};

const jugadores: Jugador[] = [
    { nombre: "Leonel Messi", golesIniciales: 7, foto: "/images/messi.jpg" },
    { nombre: "Kylian Mbappé", golesIniciales: 6, foto: "/images/mbappe.jpg" },
    { nombre: "Erling Haaland", golesIniciales: 4, foto: "/images/haaland.jpg" },
    { nombre: "Aitana Bonmatí", golesIniciales: 3, foto: "/images/bonmati.jpg" },
    { nombre: "Kevin De Bruyne", golesIniciales: 4, foto: "/images/debruyne.jpg" },
];

const TorneoApp = () => {
    return (
        <main className="torneo-container">
            <h1 className="titulo">⚽️ Registro de Goles — Torneo Mundial 🏆</h1>
            <div className="grid-jugadores">
                {jugadores.map(({ nombre, golesIniciales, foto }) => (
                    <ContadorGoles
                        key={nombre}
                        nombre={nombre}
                        golesIniciales={golesIniciales}
                        foto={foto}
                    />
                ))}
            </div>
        </main>
    );
};

export default TorneoApp;
