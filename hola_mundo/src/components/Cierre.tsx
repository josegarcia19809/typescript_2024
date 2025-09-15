// Cierre.tsx

type CierreProps = {
    consejo?: string;  // opcional
};

const Cierre = ({consejo = "🛠️ Maneja con cuidado siempre"}: CierreProps) => {
    return <h3>{consejo}</h3>;
};

export default Cierre;
