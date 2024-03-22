import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1, 1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    // TODO: Implementar useLayoutEffect

    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr />
            {isLoading ?
                <LoadingMessage /> :
                <PokemonCard
                    id={data.id}
                    name={data.name}
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny
                    ]}
                />
            }
            <hr />
            <button onClick={() => decrement()} className="btn btn-primary">Anteriores</button>
            <button onClick={() => increment()} className="btn btn-primary">Siguiente</button>
        </>
    );
};