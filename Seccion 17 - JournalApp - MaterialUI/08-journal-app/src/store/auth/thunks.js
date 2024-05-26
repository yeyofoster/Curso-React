import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if (!result.ok) {
            return dispatch(logout(result.errorMessage));
        }
        return dispatch(login(result));
    };
};