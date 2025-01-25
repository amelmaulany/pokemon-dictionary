import { NamedAPIResource } from 'pokenode-ts';
import { PokemonTypeRelationsEntity } from './pokemon-type-relations';

export type PokemonTypeRelationsPastEntity = {
  generation: NamedAPIResource;
  damageRelations: PokemonTypeRelationsEntity;
};
