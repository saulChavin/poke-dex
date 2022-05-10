import { pokeType } from "../interfaces/typesInterface";

const typesClass = {
    grass: 'bg-green-50',
    fire: 'bg-red-100',
    water: 'bg-sky-50',
    dragon: 'bg-blue-100',
    ice: 'bg-cyan-50',
    bug: 'bg-lime-50',
    normal: 'bg-orange-50',
    poison: 'bg-purple-50',
    electric: 'bg-yellow-50',
    ground: 'bg-stone-50',
    rock: 'bg-amber-100',
    fairy: 'bg-pink-50',
    fighting: 'bg-rose-50',
    psychic: 'bg-fuchsia-50',
    steel: 'bg-indigo-100',
    ghost: 'bg-purple-100',
    dark: 'bg-gray-200',
    default: 'bg-purple-500',
}


export const getGradientByType = (type: pokeType = 'default'): string => {
    return typesClass[type] ?? typesClass['default'];
}