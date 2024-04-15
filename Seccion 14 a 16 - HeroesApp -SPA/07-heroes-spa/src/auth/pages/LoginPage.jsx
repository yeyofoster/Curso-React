import { AuthContext } from '../context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navigator = useNavigate();
    const { login } = useContext(AuthContext);

    const onLogin = () => {
        login('Yeyo Foster');
        navigator('/', {
            replace: true
        });
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    );
};