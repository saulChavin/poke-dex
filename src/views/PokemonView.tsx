import React from 'react'
import { PokemonList } from '../components/PokemonList'

export const PokemonView = () => {
    return (
        <div className='container sm:flex mx-auto justify-center'>
            <PokemonList />
        </div>

    )
}
