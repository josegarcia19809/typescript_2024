import useForm from "../hooks/useForm.ts";


function FormWithCustomHook() {
    const {onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });

    return (
        <>
            <h1>SimpleForm</h1>
            <hr/>
            <input type="text" className="form-control" placeholder="Username"
                   name="username" value={username} onChange={onInputChange}/>
            <input type="email" className="form-control mt-2" placeholder="jose@example.com"
                   name="email" value={email} onChange={onInputChange}/>
            <input type="password" className="form-control mt-2" placeholder="password"
                   name="password" value={password} onChange={onInputChange}/>

        </>
    );
}

export default FormWithCustomHook;