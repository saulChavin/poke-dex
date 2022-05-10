import { Pokemon } from '../interfaces/pokemonInterface';
import './PokemonCard.css';
import { getGradientByType } from '../utils/colors';
import { pokeType } from '../interfaces/typesInterface';
import { ReactComponent as BugIcon } from '../assets/img/BugIcon.svg';
import { getTypeIcon } from '../utils/icons';



interface PokemonCardProps {
    pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    const { id, name, sprites, types } = pokemon;

    return (
        <div id='card' className={`${getGradientByType(types[0].type.name as pokeType)} flex flex-col items-center shadow-lg rounded-md`}>
            <header className='flex justify-between items-center w-full'>
                <div className='flex'>
                    {types.map(({ type }) =>
                        <img
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

        </div>
    )
}
