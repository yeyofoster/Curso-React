import { useForm } from "../hooks";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm(
        { username: '', email: '', password: '' }
    );

    // const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange} />

            <input
                type="email"
                className="form-control mt-3"
                placeholder="yeyo.foster@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange} />

            <input
                type="password"
                className="form-control mt-3"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange} />

            <button className="btn btn-primary mt-3"
                onClick={onResetForm}>
                Borrar
            </button>
        </>
    );
};