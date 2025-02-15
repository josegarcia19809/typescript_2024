import {ComponentPropsWithoutRef, forwardRef} from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>


const Input = forwardRef<HTMLInputElement, InputProps>(
    function Input({label, id, ...props}) {
        return (
            <>
                <p>
                    <label htmlFor={id}>{label}</label>
                    <input id={id} type="text" {...props} />
                </p>
            </>
        );
    })

export default Input;