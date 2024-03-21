import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();

        return () => {

        }
    }, []);

    const getFetch = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    };

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};