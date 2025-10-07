import "./AppPlataformaTabla.css";

type Pelicula = {
  titulo: string;
  anio: number;
};

const peliculas: Pelicula[] = [
  { titulo: "🕰️El viaje infinito", anio: 2022 },
  { titulo: "👥Sombras del tiempo", anio: 2019 },
  { titulo: "🔴Cielo Rojo", anio: 2024 },
];

const AppPlataformaTabla = () => {
  const verPelicula = (titulo: string) => {
    console.log(`🎬 Reproduciendo: ${titulo}`);
    alert(`🎥 Reproduciendo "${titulo}"...`);
  };

  return (
    <div className="contenedor-tabla">
      <h1>🍿 Plataforma de Streaming</h1>
      <table className="tabla-peliculas">
        <thead>
          <tr>
            <th>Título</th>
            <th>Año de lanzamiento</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map(({ titulo, anio }) => (
            <tr key={titulo}>
              <td>🎥 {titulo}</td>
              <td>📆 {anio}</td>
              <td>
                <button className="btn-ver" onClick={() => verPelicula(titulo)}>
                  ▶️ Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppPlataformaTabla;
