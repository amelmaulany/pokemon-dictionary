'use server';

import { PokemonClient } from 'pokenode-ts';

export async function getAllTypes() {
  const api = new PokemonClient();

  return await api
    .listTypes()
    .then((res) => {
      console.table(res.results);
      return res;
    })
    .catch((err) => console.error(err));
}
