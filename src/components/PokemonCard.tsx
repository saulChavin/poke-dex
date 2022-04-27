import React, { useEffect, useState } from 'react'
import pokemonDB from '../api/pokemonDB';
import { Pokemon } from '../interfaces/pokemonInterface';
import './PokemonCard.css';

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
        <div id='card' className='bg-gradient-to-b from-red-300 flex flex-col items-center shadow-lg rounded-md'>
            <span className='text-right self-end'>#00{pokemon?.id}</span>
            <img
                width={152}
                height={152} 
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
