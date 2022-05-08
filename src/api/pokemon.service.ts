import { Pokemon, PokemonDBResponse } from '../interfaces/pokemonInterface';
import { fetchApi } from './pokemonDB'

export const getPokemon = (name: string) => {
    return fetchApi<Pokemon>(`/pokemon/${name}`);
}

export const getPokemonList = (page: number = 1, limit: number = 21) => {
    return fetchApi<PokemonDBResponse>(`/pokemon/?limit=${limit}&offset=${limit * (page - 1)}`)
}