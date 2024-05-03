import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {}
});

export const { } = pokemonSlice.actions;