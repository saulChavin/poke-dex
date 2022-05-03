import React, { useEffect, useState } from 'react'
import pokemonDB from '../api/pokemonDB';
import { Result, PokemonDBResponse, Pokemon } from '../interfaces/pokemonInterface';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {

    const [pokeList, setPokeList] = useState<Pokemon[]>([]);
    
    useEffect(() => {
        pokemonDB.fetchApi<PokemonDBResponse>('/pokemon')
        .then(({results}) => {
            console.log('results', results)
            results.forEach(pokemon => {
                pokemonDB.fetchApi<Pokemon>(`/pokemon/${pokemon.name}`)
                .then(res => {
                    setPokeList(prev => [...prev, res])
                })
            })
        })
        .catch(err => console.log('err', err));
    }, []);

    return (
        <div className='grid grid-cols-3 gap-8 bg-gray-900 p-16'>
            {
                pokeList.map(pokemon => {
                    return <PokemonCard key={pokemon.name} pokemon={pokemon} />
                })
            }

        </div>

    );
}
