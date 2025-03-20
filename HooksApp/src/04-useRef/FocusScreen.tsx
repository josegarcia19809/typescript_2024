import {useRef} from "react";

function FocusScreen() {

    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        inputRef.current?.select();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>
            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <button className="btn btn-primary mt-2"
                    onClick={onClick}>
                Set Focus
            </button>
        </>
    );
}

export default FocusScreen;