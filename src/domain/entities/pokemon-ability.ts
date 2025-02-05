import { NamedAPIResource } from 'pokenode-ts';

export type PokemonAbilityEntity = {
  isHidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};
