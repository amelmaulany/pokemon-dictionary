import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faBolt,
  faBoxingGlove,
  faBug,
  faCircle,
  faDragon,
  faDropletDegree,
  faEyeEvil,
  faFeather,
  faFire,
  faFlower,
  faGear,
  faGhost,
  faHillRockslide,
  faLayerGroup,
  faLeaf,
  faPersonFairy,
  faRectangleXmark,
  faSkull,
  faSnowflake,
  faStarOfLife,
} from '@fortawesome/pro-regular-svg-icons';

export type PokemonTypeName =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'stellar'
  | 'unknown';

export class PokemonType {
  constructor(
    public readonly name: PokemonTypeName,
    public readonly color: string,
    public readonly icon: IconProp,
  ) {}

  private static readonly types: Record<PokemonTypeName, PokemonType> = {
    normal: new PokemonType('normal', '#e2e2e2', faCircle),
    fire: new PokemonType('fire', '#ce5e50', faFire),
    fighting: new PokemonType('fighting', '#f09960', faBoxingGlove),
    water: new PokemonType('water', '#60bcf0', faDropletDegree),
    flying: new PokemonType('flying', '#c0e7fc', faFeather),
    grass: new PokemonType('grass', '#71b586', faLeaf),
    poison: new PokemonType('poison', '#aa8cc3', faSkull),
    electric: new PokemonType('electric', '#fae775', faBolt),
    ground: new PokemonType('ground', '#7b5e34', faLayerGroup),
    psychic: new PokemonType('psychic', '#e9789d', faStarOfLife),
    rock: new PokemonType('rock', '#b7b49d', faHillRockslide),
    ice: new PokemonType('ice', '#bbfcf8', faSnowflake),
    bug: new PokemonType('bug', '#bbfcf8', faBug),
    dragon: new PokemonType('dragon', '#86b1df', faDragon),
    ghost: new PokemonType('ghost', '#b8a4cc', faGhost),
    dark: new PokemonType('dark', '#514b4f', faEyeEvil),
    steel: new PokemonType('steel', '#95aab3', faGear),
    fairy: new PokemonType('fairy', '#d896d6', faPersonFairy),
    stellar: new PokemonType('stellar', '#83ac9e', faFlower),
    unknown: new PokemonType('unknown', '#4e5754', faRectangleXmark),
  };

  static getByName(type: string): PokemonType {
    if (!this.types[type as PokemonTypeName]) {
      console.error(`${type} from PokemonType.getByName() is not implemented.`);
      throw new Error(`PokemonType "${type}" is not recognized.`);
    }
    return this.types[type as PokemonTypeName];
  }
}
