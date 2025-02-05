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
import { PokemonTypeName } from '../enums/pokemon-type';

const typeIcons: Record<PokemonTypeName, IconProp> = {
  normal: faCircle,
  fire: faFire,
  fighting: faBoxingGlove,
  water: faDropletDegree,
  flying: faFeather,
  grass: faLeaf,
  poison: faSkull,
  electric: faBolt,
  ground: faLayerGroup,
  psychic: faStarOfLife,
  rock: faHillRockslide,
  ice: faSnowflake,
  bug: faBug,
  dragon: faDragon,
  ghost: faGhost,
  dark: faEyeEvil,
  steel: faGear,
  fairy: faPersonFairy,
  stellar: faFlower,
  unknown: faRectangleXmark,
};

export function getIconByPokemonType(type: PokemonTypeName): IconProp {
  if (!(type in typeIcons)) {
    console.error(`"${type}" from getIconByPokemonType is not implemented.`);
    return faRectangleXmark;
  }
  return typeIcons[type];
}
