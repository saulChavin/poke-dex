import { Pokemon } from '../interfaces/pokemonInterface';
import { getColorByType } from '../utils/colors';
import { pokeType } from '../interfaces/typesInterface';
import { getTypeIcon } from '../utils/icons';
import { PokeballLoader } from './PokeballLoader';
import './PokemonCard.css';
import { useEffect } from 'react';



interface PokemonCardProps {
    pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    const { id, name, sprites, types, height, abilities } = pokemon;

    useEffect(() => {
        types.map(({type}) => {
            fetch(`${type.url}`).then(res => res.json()).then(console.log)
        })
    }, [])


    console.log(pokemon);
    return (
        <div id='poke-card' >
            <div className={`inner-card ${getColorByType(types?.[0].type.name as pokeType)} flex flex-col items-center justify-center shadow-lg sm:rounded-md w-64 h-64 p-2 xs:border-b-gray-900 m-4`}>
                <div className='card-front w-full'>
                    <header className='flex justify-between items-center w-full'>
                        <div className='flex'>
                            {types.map(({ type }) =>
                                <img
                                    key={type.name}
                                    src={`${getTypeIcon(type.name as pokeType)}`}
                                    width={30}
                                    alt={type.name}
                                    className='mx-0.5'
                                />
                            )}
                        </div>
                        <p className='text-right self-end text-gray-500 font-semibold leading-loose'>#{id}</p>
                    </header>

                    <img
                        className='m-auto'
                        width={152}
                        height={152}
                        src={sprites.other?.['official-artwork'].front_default} />
                    <footer className='flex flex-col flex-1 items-center justify-center'>
                        <h1 className='capitalize text-2xl font-bold text-gray-700'>{name}</h1>
                    </footer>
                </div>
                <div className='card-back absolute justify-center align-center'>
                    <h3 className='capitalize font-bold'>abillities</h3>
                    {
                        abilities.map(item => (
                            <small className='italic'>{item.ability.name}<br/></small>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
