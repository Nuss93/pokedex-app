import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PokemonState } from "../../types";

const initialState: PokemonState = {
    value: 0,
    data: [],
    loading: 'idle',
}

export const getPokemon = createAsyncThunk('pokemon/getPokemon',async () => {
    return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25').then(res => {
        return res.json()
    })
})
export const getIndividualPokemon = createAsyncThunk('pokemon/getIndividualPokemon', async (id) => {
    console.log('thunking', id)
})
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        incrementByTwo: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getPokemon.pending, (state, {payload}) => {
                state.loading = "pending"
            })
            .addCase(getPokemon.fulfilled, (state, {payload}) => {
                state.loading = "fulfilled"
                state.data = payload
            })
            .addCase(getPokemon.rejected, (state, {payload}) => {
                state.loading = "error"
            })
    }
})

export const { increment, incrementByTwo } = pokemonSlice.actions
export default pokemonSlice.reducer