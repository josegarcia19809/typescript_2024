type CierreViajeProps = {
    nota: string;
}

const CierreViaje = ({nota}: CierreViajeProps) => {
    return (
        <footer>
            <p>{nota}</p>
        </footer>
    )
}

export default CierreViaje