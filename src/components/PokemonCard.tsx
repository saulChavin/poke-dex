import React, { useEffect, useState } from 'react'
import pokemonDB from '../api/pokemonDB';
import { Pokemon } from '../interfaces/pokemonInterface';
import './PokemonCard.css';
import { getGradientByType } from '../utils/colors';

interface PokemonCardProps {
    pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    const { id, name, sprites, types } = pokemon;
    const [background, setBackground] = useState('green-500');

    return (
        <div id='card' className={`bg-gradient-to-b ${getGradientByType(types[0].type.name)} flex flex-col items-center shadow-lg rounded-md`}>
            <span className='text-right self-end text-stone-300 font-semibold'>#00{id}</span>
            <img
                width={152}
                height={152}
                src={sprites.other?.['official-artwork'].front_default} />
            <div className='flex flex-col flex-1 items-center justify-center'>
                <h1 className='capitalize text-2xl font-bold text-stone-300'>{name}</h1>
                <p>
                    {types.map(({ type }, index) => {
                        return <small key={`${type.name}-${index}`}>
                            {type.name}
                            {types.length !== index + 1 && ' / '}
                        </small>
                    })}
                </p>

            </div>
        </div>
    )
}
