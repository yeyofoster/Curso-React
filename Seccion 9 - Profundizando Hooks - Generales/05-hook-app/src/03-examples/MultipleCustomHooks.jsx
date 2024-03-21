import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';

    const { data, hasError, isLoading } = useFetch(url);

    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr />
            {isLoading ?
                <h3>Cargando...</h3> :
                <h3>{data?.name}</h3>
            }

        </>
    );
};