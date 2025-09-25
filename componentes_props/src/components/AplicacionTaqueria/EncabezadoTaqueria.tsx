type EncabezadoTaqueriaProps = {
    titulo: string
}

const EncabezadoTaqueria = ({titulo}: EncabezadoTaqueriaProps) => {
    return (
        <header>
            <h1>{titulo}</h1>
        </header>
    )
}

export default EncabezadoTaqueria