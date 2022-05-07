const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchApi<Type>(path: string, limit = 21, offset=0): Promise<Type> {
    const response = await fetch(`${BASE_URL}${path}?limit=${limit}&offset=${offset}`);
    return response.json();
  }

export default {fetchApi};