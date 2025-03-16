import {ChangeEvent, useState} from "react";

type FormState = {
    [key: string]: string;
}

function UseForm<T extends FormState>(initialForm: T) {
    const [formState, setFormState] = useState<T>(initialForm);

    const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        setFormState((prevState) => ({
                ...prevState,
                [name]: value
            })
        );
    }

    const reset = (): void => {
        setFormState(initialForm);
    }
    return {
        ...formState,
        formState,
        onInputChange,
        reset,
    }
}

export default UseForm;