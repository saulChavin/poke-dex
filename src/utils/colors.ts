

export const getGradientByType = (type: string | undefined): string => {
    switch(type) {
        case 'grass': return 'bg-green-50';
        case 'fire': return 'bg-red-50';
        case 'water': return 'bg-sky-50';
        case 'bug': return 'bg-lime-50';
        case 'normal': return 'bg-amber-50'
        default: return 'bg-purple-400';
    }

}