import { NamedAPIResource } from 'pokenode-ts';
import { PokemonMoveVersionEntity } from './pokemon-move-version';

export type PokemonMoveEntity = {
  move: NamedAPIResource;
  versionGroupDetails: PokemonMoveVersionEntity[];
};
