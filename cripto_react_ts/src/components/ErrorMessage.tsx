import {ReactNode} from "react";

function ErrorMessage({children}: { children: ReactNode }) {
    return (
        <div>{children}</div>
    );
}

export default ErrorMessage;