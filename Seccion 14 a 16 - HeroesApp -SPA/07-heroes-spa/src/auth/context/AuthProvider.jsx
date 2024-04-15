import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

export const AuthProvider = ({ children }) => {
    // const initialState = {
    //     logged: false
    // };

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'));

        return {
            logged: !!user,
            user: user
        }
    };

    const [authState, authDispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {
        const user = {
            id: 'Yeyo',
            name: name
        };
        const action = {
            type: types.login,
            payload: user
        };

        localStorage.setItem('user', JSON.stringify(user));
        authDispatch(action);
    };

    const logout = () => {
        const action = {
            type: types.logout,
            payload: {
                logged: false
            }
        };
        localStorage.removeItem('user');
        authDispatch(action);
    };

    return (
        <AuthContext.Provider value={{
            ...authState,

            // Methods
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider >
    );
};