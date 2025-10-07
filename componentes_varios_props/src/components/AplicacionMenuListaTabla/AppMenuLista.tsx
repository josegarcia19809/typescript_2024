type Platillo = {
    nombrePlatillo: string;
    precio: number;
};

const menu: Platillo[] = [
    { nombrePlatillo: "🍕Pizza Pepperoni", precio: 120 },
    { nombrePlatillo: "🥩Lasaña de carne", precio: 150 },
    { nombrePlatillo: "🥗Ensalada César", precio: 95 },
];

const AppMenuLista = () => {
    return (
        <>
            <h1>🧑🏻‍🍳Menú de un Restaurante</h1>
            <ul>
                {menu.map(({ nombrePlatillo, precio }) => (
                    <li key={nombrePlatillo}>
                        {`Nombre del platillo: ${nombrePlatillo}, precio: 💲${precio}`}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default AppMenuLista;
