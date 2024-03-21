import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        isLoadingState();
        getFetch();

        return () => {

        }
    }, [url]);

    const isLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    };

    const getFetch = async () => {
        const response = await fetch(url);

        await new Promise(resolve => setTimeout(resolve, 1000));

        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });
            return;
        }

        const data = await response.json();
        console.log(data);
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });

        // Manejo de cache
    };

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
};