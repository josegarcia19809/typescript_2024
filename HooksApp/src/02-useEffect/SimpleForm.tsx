import {ChangeEvent, useEffect, useState} from "react";
import Message from "./Message.tsx";

interface FormState {
    username: string;
    email: string;
}

function SimpleForm() {

    const [formState, setFormState] = useState<FormState>({
        username: "jgarcia",
        email: "jgarcia@gmail.com",
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
        // console.log("UseEffect called")
    },[]);

    useEffect(() => {
        // console.log("formState changed")
    },[formState]);

    useEffect(() => {
        // console.log("email changed")
    },[email]);


    return (
        <>
            <h1>SimpleForm</h1>
            <hr/>
            <input type="text" className="form-control" placeholder="Username"
                   name="username" value={username} onChange={onInputChange}/>
            <input type="email" className="form-control mt-2" placeholder="jose@example.com"
                   name="email" value={email} onChange={onInputChange}/>
            {
                (username === "jgarcia") && <Message/>
            }
        </>
    );
}

export default SimpleForm;