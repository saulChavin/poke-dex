const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchApi<Type>(path: string, limit = 21, offset=0): Promise<Type> {
    const response = await fetch(`${BASE_URL}${path}`);
    return response.json();
  }

export default {fetchApi};