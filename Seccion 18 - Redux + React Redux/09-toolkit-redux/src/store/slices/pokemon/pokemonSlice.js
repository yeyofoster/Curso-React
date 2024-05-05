import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemon: (state, action) => {
            state.isLoading = false;
            state.pokemons = action.payload.pokemons
            state.page = action.payload.page
        }
    }
});

export const { startLoadingPokemons, setPokemon } = pokemonSlice.actions;