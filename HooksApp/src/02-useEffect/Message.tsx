import {useEffect, useState} from "react";

function Message() {

    const [coords, setCoords] = useState<{ x: number, y: number }>({x: 0, y: 0});

    useEffect(() => {
        // Cargar un evento
        const onMouseMove = (event: MouseEvent) => {
            const {x, y} = event;
            const coords = {x, y};
            setCoords(coords);
        }

        window.addEventListener('mousemove', onMouseMove);

        // Desmontar un evento
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    );
}

export default Message;