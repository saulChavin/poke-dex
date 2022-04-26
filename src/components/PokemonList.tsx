import React, { useEffect, useState } from 'react'
import pokemonDB from '../api/pokemonDB';
import { Result, PokemonDBResponse } from '../interfaces/pokemonInterface';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {

    const [pokeList, setPokeList] = useState<Result[]>([]);

    useEffect(() => {
        (async () => {
            const pokemonListRes: PokemonDBResponse = await pokemonDB.fetchApi('/pokemon');
            const results: Result[] = pokemonListRes.results;
            setPokeList(results);
        })();
    }, []);

    return (
        <div className='flex flex-wrap gap-1 justify-between'>
            {
                pokeList.map(pokemon => {
                    return <PokemonCard key={pokemon.name} name={pokemon.name} />
                })
            }

        </div>

    );
}
