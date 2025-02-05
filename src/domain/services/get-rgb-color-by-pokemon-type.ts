import hexaRgb from 'hex-rgb';
import { getColorByPokemonType } from './get-color-by-pokemon-type';
import { PokemonType } from 'pokenode-ts';
import { PokemonTypeName } from 'pokemon/domain/enums/pokemon-type';

const getRgbColorByPokemonType = (type: PokemonType) =>
  hexaRgb(getColorByPokemonType(type.type.name as PokemonTypeName));

export default getRgbColorByPokemonType;
