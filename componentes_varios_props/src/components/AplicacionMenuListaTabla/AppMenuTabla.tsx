import "./AppMenuTabla.css";

type Platillo = {
    nombrePlatillo: string;
    precio: number;
};

const menu: Platillo[] = [
    {nombrePlatillo: "🍕Pizza Pepperoni", precio: 120},
    {nombrePlatillo: "🥩Lasaña de carne", precio: 150},
    {nombrePlatillo: "🥗Ensalada César", precio: 95},
];

const AppMenuTabla = () => {
    return (
        <div className="contenedor-menu">
            <h1>🧑🏻‍🍳 Menú de un Restaurante</h1>
            <table className="tabla-menu">
                <thead>
                <tr>
                    <th>Nombre del platillo</th>
                    <th>Precio</th>
                </tr>
                </thead>
                <tbody>
                {menu.map(({nombrePlatillo, precio}) => (
                    <tr key={nombrePlatillo}>
                        <td>{nombrePlatillo}</td>
                        <td>💲{precio}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppMenuTabla;
