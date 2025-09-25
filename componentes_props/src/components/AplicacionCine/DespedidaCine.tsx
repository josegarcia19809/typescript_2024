type DespedidaCineProps = {
    mensaje: string
}

const DespedidaCine = ({mensaje}: DespedidaCineProps) => {
    return (
        <footer>
            <p>{mensaje}</p>
        </footer>
    )
}

export default DespedidaCine