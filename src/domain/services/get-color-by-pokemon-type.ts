import { PokemonTypeName } from '../enums/pokemon-type';

const typeColors: Record<PokemonTypeName, string> = {
  normal: '#e2e2e2',
  fire: '#ce5e50',
  fighting: '#f09960',
  water: '#60bcf0',
  flying: '#c0e7fc',
  grass: '#71b586',
  poison: '#aa8cc3',
  electric: '#fae775',
  ground: '#7b5e34',
  psychic: '#e9789d',
  rock: '#b7b49d',
  ice: '#bbfcf8',
  bug: '#bbfcf8',
  dragon: '#86b1df',
  ghost: '#b8a4cc',
  dark: '#514b4f',
  steel: '#95aab3',
  fairy: '#d896d6',
  stellar: '#83ac9e',
  unknown: '#4e5754',
};

export const getColorByPokemonType = (type: PokemonTypeName): string => {
  if (!(type in typeColors)) {
    console.error(`"${type}" from getColorByPokemonType function is not implemented.`);
    return '#000000';
  }
  return typeColors[type];
};
