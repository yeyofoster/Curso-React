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
            state.pokemons = action.payload
        }
    }
});

export const { startLoadingPokemons, setPokemon } = pokemonSlice.actions;