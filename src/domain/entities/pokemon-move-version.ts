import { NamedAPIResource } from 'pokenode-ts';

export type PokemonMoveVersionEntity = {
  moveLearnMethod: NamedAPIResource;
  versionGroup: NamedAPIResource;
  levelLearnedAt: number;
};
