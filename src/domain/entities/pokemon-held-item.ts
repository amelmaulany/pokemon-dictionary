import { NamedAPIResource } from 'pokenode-ts';
import { PokemonHeldItemVersionEntity } from './pokemon-held-item-version';

export type PokemonHeldItemEntity = {
  item: NamedAPIResource;
  versionDetails: PokemonHeldItemVersionEntity[];
};
