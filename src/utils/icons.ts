import { pokeType } from "../interfaces/typesInterface"
import {
    BugIcon,
    DarkIcon,
    DragonIcon,
    ElectricIcon,
    FairyIcon,
    FireIcon,
    FightingIcon,
    FlyingIcon,
    GhostIcon,
    GrassIcon,
    GroundIcon,
    IceIcon,
    NormalIcon,
    PoisonIcon,
    PsychicIcon,
    RockIcon,
    SteelIcon,
    WaterIcon
} from '../assets/img/pokemon-types';

const typesIcons = {
    grass: GrassIcon,
    fire: FireIcon,
    water: WaterIcon,
    dragon: DragonIcon,
    flying: FlyingIcon,
    ice: IceIcon,
    bug: BugIcon,
    normal: NormalIcon,
    poison: PoisonIcon,
    electric: ElectricIcon,
    ground: GroundIcon,
    rock: RockIcon,
    fairy: FairyIcon,
    fighting: FightingIcon,
    psychic: PsychicIcon,
    steel: SteelIcon,
    ghost: GhostIcon,
    dark: DarkIcon,
    default: PoisonIcon
}

export const getTypeIcon = (type: pokeType) => {
    return typesIcons[type];
}   