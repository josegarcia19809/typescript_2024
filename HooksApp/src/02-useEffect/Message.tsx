import {useEffect} from "react";

function Message() {

    useEffect(() => {
        console.log("Message Mounted");
        return () => {
            console.log("Message Unmounted");
        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    );
}

export default Message;