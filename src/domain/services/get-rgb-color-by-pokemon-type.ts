import hexaRgb from 'hex-rgb';
import { getColorByPokemonType } from './get-color-by-pokemon-type';
import { PokemonTypeName } from 'pokemon/domain/enums/pokemon-type';

const getRgbColorByPokemonType = (type: PokemonTypeName) => hexaRgb(getColorByPokemonType(type));

export default getRgbColorByPokemonType;
