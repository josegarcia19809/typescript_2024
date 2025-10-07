import "./AppPlataformaLista.css";

type Pelicula = {
  titulo: string;
  anio: number;
};

const peliculas: Pelicula[] = [
  { titulo: "🕰️El viaje infinito", anio: 2022 },
  { titulo: "👥Sombras del tiempo", anio: 2019 },
  { titulo: "🔴Cielo Rojo", anio: 2024 },
];

const AppPlataformaLista = () => {
  return (
    <div className="contenedor-plataforma">
      <h1>🍿 Plataforma de Streaming</h1>
      <ul className="lista-peliculas">
        {peliculas.map(({ titulo, anio }) => (
          <li key={titulo} className="item-pelicula">
            <span className="titulo-pelicula">{titulo}</span>
            <span className="anio-pelicula">🎞️ {anio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppPlataformaLista;
