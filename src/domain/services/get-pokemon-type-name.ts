import { PokemonTypeName } from 'pokemon/domain/enums/pokemon-type';
import { PokemonType } from 'pokenode-ts';

const getPokemonTypeName = (type: PokemonType) => type.type.name as PokemonTypeName;

export default getPokemonTypeName;
