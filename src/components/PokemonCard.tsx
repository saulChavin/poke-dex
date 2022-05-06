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

    return (
        <div id='card' className={`${getGradientByType(types[0].type.name)} flex flex-col items-center shadow-lg rounded-md`}>
            <header className='flex justify-between w-full'>
                <div>
                    {types.map(({ type }, index) =>
                        <small key={`${type.name}-${index}`}>
                            {type.name}
                            {types.length !== index + 1 && ' / '}
                        </small>)}
                </div>
                <p className='text-right self-end text-gray-300 font-semibold'>#00{id}</p>
            </header>

            <img
                width={152}
                height={152}
                src={sprites.other?.['official-artwork'].front_default} />
            <div className='flex flex-col flex-1 items-center justify-center'>
                <h1 className='capitalize text-2xl font-bold text-gray-700'>{name}</h1>

            </div>
        </div>
    )
}
