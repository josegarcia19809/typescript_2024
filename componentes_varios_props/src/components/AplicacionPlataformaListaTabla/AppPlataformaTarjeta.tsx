import "./AppPlataformaTarjeta.css";

type Pelicula = {
  titulo: string;
  anio: number;
  portada: string;
};

const peliculas: Pelicula[] = [
  {
    titulo: "🕰️ El viaje infinito",
    anio: 2022,
    portada: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600",
  },
  {
    titulo: "👥 Sombras del tiempo",
    anio: 2019,
    portada: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=600",
  },
  {
    titulo: "🔴 Cielo Rojo",
    anio: 2024,
    portada: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600",
  },
];

const AppPlataformaTarjeta = () => {
  return (
    <div className="contenedor-tarjetas">
      <h1>🎬 Plataforma de Streaming</h1>
      <div className="grid-peliculas">
        {peliculas.map(({ titulo, anio, portada }) => (
          <div key={titulo} className="tarjeta-pelicula">
            <img src={portada} alt={titulo} className="imagen-pelicula" />
            <div className="info-pelicula">
              <h2>{titulo}</h2>
              <p>📅 Año: {anio}</p>
              <button className="btn-ver">▶️ Ver ahora</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppPlataformaTarjeta;
