

export const getGradientByType = (type: string | undefined): string => {
    switch(type) {
        case 'grass': return 'from-green-700';
        case 'fire': return 'from-red-900';
        case 'water': return 'from-sky-900';
        case 'bug': return 'from-lime-900';
        case 'normal': return 'from-amber-800'
        default: return 'from-purple-400';
    }

}