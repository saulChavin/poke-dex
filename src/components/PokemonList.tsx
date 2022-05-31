import React, { useEffect, useRef, useState } from 'react'
import pokemonDB from '../api/pokemonDB';
import { Pokemon, Result } from '../interfaces/pokemonInterface';
import { PokemonCard } from './PokemonCard';
import useIsNearScreen from '../hooks/useIsNearScreen';
import { PokeballLoader } from './PokeballLoader';
import { getPokemon, getPokemonList } from '../api/pokemon.service';

export const PokemonList = () => {

    const [pokeList, setPokeList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const visRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const [page, setPage] = useState(1);
    const { isNearScreen, } = useIsNearScreen({ externalRef: loading ? null : visRef, once: false });

    const loadPage = async (page: number) => {
        try {
            const { results } = await getPokemonList(page);
            results.forEach(result => {
                getPokemon(result.name)
                    .then(pokemon => setPokeList(prev => [...prev, pokemon]));
            });
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
            setPage(page);
        }
    }

    useEffect(() => {
        loadPage(page);
    }, []);

    useEffect(() => {
        isNearScreen && loadPage(page + 1);
    }, [isNearScreen]);

    return (
        <div className='flex flex-column flex-wrap justify-center'>
            {pokeList.sort((a, b) => a.id > b.id ? 1 : -1).map(pokemon => {
                return <PokemonCard key={pokemon.name} pokemon={pokemon} />
            })}
            <div id='visor' ref={visRef}></div>
        </div>
    );
}