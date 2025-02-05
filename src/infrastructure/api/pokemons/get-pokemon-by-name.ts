'use server';

import { PokemonClient } from 'pokenode-ts';

export async function getPokemonByName(name: string) {
  const api = new PokemonClient();

  return await api
    .getPokemonByName(name)
    .then((res) => res)
    .catch((err) => console.error(err));
}
