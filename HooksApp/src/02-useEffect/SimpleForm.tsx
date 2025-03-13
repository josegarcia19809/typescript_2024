import {ChangeEvent, useEffect, useState} from "react";

interface FormState {
    username: string;
    email: string;
}

function SimpleForm() {

    const [formState, setFormState] = useState<FormState>({
        username: "pk",
        email: "pk@gmail.com",
    });

    const {username, email} = formState;

    const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        setFormState((prevState: FormState) => ({
            ...prevState,
            [name]: value})
        );

    }
    useEffect(() => {
        console.log("UseEffect called")
    },[])


    return (
        <>
            <h1>SimpleForm</h1>
            <hr/>
            <input type="text" className="form-control" placeholder="Username"
                   name="username" value={username} onChange={onInputChange}/>
            <input type="email" className="form-control mt-2" placeholder="jose@example.com"
                   name="email" value={email} onChange={onInputChange}/>
        </>
    );
}

export default SimpleForm;