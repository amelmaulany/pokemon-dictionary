import { NamedAPIResource } from 'pokenode-ts';

export type PokemonTypeRelationsEntity = {
  noDamageTo: NamedAPIResource[];
  halfDamageTo: NamedAPIResource[];
  doubleDamageTo: NamedAPIResource[];
  noDamageFrom: NamedAPIResource[];
  halfDamageFrom: NamedAPIResource[];
  doubleDamageFrom: NamedAPIResource[];
};
