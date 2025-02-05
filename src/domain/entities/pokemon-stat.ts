import { NamedAPIResource } from 'pokenode-ts';

export type PokemonStatEntity = {
  stat: NamedAPIResource;
  effort: number;
  baseStat: number;
};
