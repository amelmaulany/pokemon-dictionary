'use server';

import { PokemonClient } from 'pokenode-ts';

export async function getAllPokemons() {
  const api = new PokemonClient();

  return await api
    .listPokemons()
    .then((res) => res)
    .catch((err) => console.error(err));
}
