'use server';

import { PokemonTypeResponseToEntity } from 'pokemon/infrastructure/mappers/pokemon-type';
import { PokemonClient } from 'pokenode-ts';

export async function getType(name: string) {
  const api = new PokemonClient();

  return await api
    .getTypeByName(name)
    .then((res) => PokemonTypeResponseToEntity.map(res))
    .catch((err) => console.error(err));
}
