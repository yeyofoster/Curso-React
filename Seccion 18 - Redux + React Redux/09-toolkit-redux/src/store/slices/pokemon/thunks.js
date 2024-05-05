import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemons } from "./pokemonSlice";

const pageSize = 5;

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        const { data } = await pokemonApi.get(`pokemon?limit=5&offset=${page * pageSize}`);
        dispatch(setPokemon({
            pokemons: data.results,
            page: page + 1
        }));
    };
};