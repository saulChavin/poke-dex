import { useState } from 'react';
import { Pokemon } from '../interfaces/pokemonInterface';
import { getGradientByType } from '../utils/colors';
import { pokeType } from '../interfaces/typesInterface';
import { getTypeIcon } from '../utils/icons';
import { useEffect } from 'react';
import { getPokemon } from '../api/pokemon.service';
import { PokeballLoader } from './PokeballLoader';



interface PokemonCardProps {
    pokeName: string;
}

export const PokemonCard = ({ pokeName }: PokemonCardProps) => {

    const [{ id, name, types, sprites, }, setPokemon] = useState<Pokemon>({} as Pokemon);

    useEffect(() => {
        getPokemon(pokeName).then((res: Pokemon) => {
            setPokemon(res);
        })
    }, [])

    return (
        <div id='card' className={`${getGradientByType(types?.[0].type.name as pokeType)} flex flex-col items-center xs:shadow-none sm:shadow-lg sm:rounded-md xs:w-full sm:w-64 sm:h-64 p-2 xs:border-b-gray-900` }>
            {!Boolean(id)
                ? <PokeballLoader />
                : <>
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
                        width={152}
                        height={152}
                        src={sprites.other?.['official-artwork'].front_default} />
                    <footer className='flex flex-col flex-1 items-center justify-center'>
                        <h1 className='capitalize text-2xl font-bold text-gray-700'>{name}</h1>
                    </footer>
                </>
            }

        </div>
    )
}
