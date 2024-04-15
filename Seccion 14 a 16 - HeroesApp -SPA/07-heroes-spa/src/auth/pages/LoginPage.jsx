import { AuthContext } from '../context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navigator = useNavigate();
    const { login } = useContext(AuthContext);

    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        login('Yeyo Foster');
        navigator(lastPath, {
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