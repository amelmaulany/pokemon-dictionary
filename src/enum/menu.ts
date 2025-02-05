import { Menu } from 'pokemon/types/menu';
import { faGrid, faHome, faWater } from '@fortawesome/pro-regular-svg-icons';

export const menus: Menu[] = [
  {
    href: '/',
    icon: faHome,
    label: 'Home',
  },
  {
    href: '/pokemons',
    icon: faGrid,
    label: 'Pokémons',
  },
  {
    href: '/pokemon-types',
    icon: faWater,
    label: 'Types',
  },
];
