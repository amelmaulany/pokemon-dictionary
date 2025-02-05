'use server';

import { error } from 'console';
import { PokemonClient, PokemonSpecies } from 'pokenode-ts';

export async function getPokemonSpeciesByName(name: string) {
  const api = new PokemonClient();

  return await api
    .getPokemonSpeciesByName(name)
    .then((res) => res as PokemonSpecies)
    .catch((err) => error(err));
}
