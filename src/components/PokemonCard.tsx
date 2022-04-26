import React, { useEffect, useState } from 'react'
import pokemonDB from '../api/pokemonDB';
import { Pokemon } from '../interfaces/pokemonInterface';

interface PokemonCardProps {
    name: string;
}

export const PokemonCard = ({ name }: PokemonCardProps) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        const loadPokemon = async () => {
            const pokemon: Pokemon = await pokemonDB.fetchApi(`/pokemon/${name}`);
            setPokemon(pokemon);
        }
        loadPokemon();
        return () => {
        }
    }, [name])

    return (
        <div id='card' className='transition ease-in-out delay-100 shadow-lg flex rounded-md w-64 hover:bg-sky-50 duration-500'>
            <img
                width={70}
                height={70}
                src={pokemon?.sprites?.other?.['official-artwork']?.front_default} />
            <div className='flex flex-col flex-1 items-center justify-center'>
                <h1 className='text-xl '>{pokemon?.name}</h1>
                <p>
                    {pokemon?.types.map((obj, index) => {
                        return <small key={`${obj.type.name}-${index}`}>
                            {obj.type.name}
                            {pokemon.types.length !== index + 1 && ' / '}
                        </small>
                    })}
                </p>

            </div>
        </div>
    )
}
