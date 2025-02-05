import { NamedAPIResource, PokemonType } from 'pokenode-ts';
import { PokemonAbilityEntity } from './pokemon-ability';
import { VersionGameIndexEntity } from './version-game-index';
import { PokemonHeldItemEntity } from './pokemon-held-item';
import { PokemonMoveEntity } from './pokemon-move';
import { PokemonSpritesEntity } from './pokemon-sprites';
import { PokemonStatEntity } from './pokemon-stat';

export type PokemonEntity = {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbilityEntity[];
  forms: NamedAPIResource[];
  gameIndices: VersionGameIndexEntity[];
  heldItems: PokemonHeldItemEntity[];
  locationAreaEncounters: string;
  moves: PokemonMoveEntity[];
  sprites: PokemonSpritesEntity;
  species: NamedAPIResource;
  stats: PokemonStatEntity[];
  types: PokemonType[];
};
