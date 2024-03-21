import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

    useFetch(url);

    return (
        <>
            <h1>MultipleCustomHooks</h1>
            <hr />
        </>
    );
};