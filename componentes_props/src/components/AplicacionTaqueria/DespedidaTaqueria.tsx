type DespedidaTaqueriaProps = {
    nota: string;
};

const DespedidaTaqueria = ({nota}: DespedidaTaqueriaProps) => {
    return (
        <footer>
            <p>{nota}</p>
        </footer>
    );
};

export default DespedidaTaqueria;
