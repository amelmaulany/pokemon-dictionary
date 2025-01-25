import { Name, NamedAPIResource, TypePokemon } from 'pokenode-ts';
import { PokemonTypeRelationsEntity } from './pokemon-type-relations';
import { PokemonTypeRelationsPastEntity } from './pokemon-type-relations-past';
import { VersionGameIndexEntity } from './version-game-index';

export type PokemonTypeEntity = {
  id: number;
  name: string;
  damageRelations: PokemonTypeRelationsEntity;
  pastDamageRelations: PokemonTypeRelationsPastEntity[];
  gameIndices: VersionGameIndexEntity[];
  generation: NamedAPIResource;
  moveDamageClass: NamedAPIResource;
  names: Name[];
  pokemon: TypePokemon[];
  moves: NamedAPIResource[];
};
