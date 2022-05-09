

export const getGradientByType = (type: string | undefined): string => {
    switch(type) {
        case 'grass': return 'bg-green-50';
        case 'fire': return 'bg-red-100';
        case 'water': return 'bg-sky-50';
        case 'bug': return 'bg-lime-50';
        case 'normal': return 'bg-orange-50';
        case 'poison': return 'bg-purple-50';
        case 'electric': return 'bg-yellow-50';
        case 'ground': return 'bg-stone-50';
        case 'fairy': return 'bg-pink-50';
        default: return 'bg-purple-400';
    }

}