import { Meta, StoryObj } from '@storybook/react';
import PokemonCardUI from './pokemon-card';
import { PokemonEntity } from 'pokemon/domain/entities/pokemon';

const meta: Meta<typeof PokemonCardUI> = {
  title: 'PokemonCard',
  component: PokemonCardUI,
};

export default meta;

type Story = StoryObj<typeof PokemonCardUI>;

const data: PokemonEntity = {
  abilities: [
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/',
      },
      isHidden: false,
      slot: 1,
    },
  ],
  baseExperience: 64,
  forms: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
    },
  ],
  gameIndices: [
    {
      gameIndex: 153,
      version: {
        name: 'red',
        url: 'https://pokeapi.co/api/v2/version/1/',
      },
    },
    {
      gameIndex: 153,
      version: {
        name: 'blue',
        url: 'https://pokeapi.co/api/v2/version/2/',
      },
    },
    {
      gameIndex: 153,
      version: {
        name: 'yellow',
        url: 'https://pokeapi.co/api/v2/version/3/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'gold',
        url: 'https://pokeapi.co/api/v2/version/4/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'silver',
        url: 'https://pokeapi.co/api/v2/version/5/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'crystal',
        url: 'https://pokeapi.co/api/v2/version/6/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'ruby',
        url: 'https://pokeapi.co/api/v2/version/7/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'sapphire',
        url: 'https://pokeapi.co/api/v2/version/8/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'emerald',
        url: 'https://pokeapi.co/api/v2/version/9/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'firered',
        url: 'https://pokeapi.co/api/v2/version/10/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'leafgreen',
        url: 'https://pokeapi.co/api/v2/version/11/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'diamond',
        url: 'https://pokeapi.co/api/v2/version/12/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'pearl',
        url: 'https://pokeapi.co/api/v2/version/13/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'platinum',
        url: 'https://pokeapi.co/api/v2/version/14/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'heartgold',
        url: 'https://pokeapi.co/api/v2/version/15/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'soulsilver',
        url: 'https://pokeapi.co/api/v2/version/16/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'black',
        url: 'https://pokeapi.co/api/v2/version/17/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'white',
        url: 'https://pokeapi.co/api/v2/version/18/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'black-2',
        url: 'https://pokeapi.co/api/v2/version/21/',
      },
    },
    {
      gameIndex: 1,
      version: {
        name: 'white-2',
        url: 'https://pokeapi.co/api/v2/version/22/',
      },
    },
  ],
  height: 7,
  heldItems: [],
  id: 1,
  isDefault: true,
  locationAreaEncounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [
    {
      move: {
        name: 'razor-wind',
        url: 'https://pokeapi.co/api/v2/move/13/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
      ],
    },
    {
      move: {
        name: 'swords-dance',
        url: 'https://pokeapi.co/api/v2/move/14/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'cut',
        url: 'https://pokeapi.co/api/v2/move/15/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bind',
        url: 'https://pokeapi.co/api/v2/move/20/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'vine-whip',
        url: 'https://pokeapi.co/api/v2/move/22/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 10,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 10,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 10,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 10,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 10,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 10,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 10,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 5,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'headbutt',
        url: 'https://pokeapi.co/api/v2/move/29/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'tackle',
        url: 'https://pokeapi.co/api/v2/move/33/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'body-slam',
        url: 'https://pokeapi.co/api/v2/move/34/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'take-down',
        url: 'https://pokeapi.co/api/v2/move/36/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 18,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'double-edge',
        url: 'https://pokeapi.co/api/v2/move/38/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 32,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'growl',
        url: 'https://pokeapi.co/api/v2/move/45/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 4,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 4,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 4,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 4,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 4,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 4,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 4,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 3,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 1,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'strength',
        url: 'https://pokeapi.co/api/v2/move/70/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mega-drain',
        url: 'https://pokeapi.co/api/v2/move/72/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'leech-seed',
        url: 'https://pokeapi.co/api/v2/move/73/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 7,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 9,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'growth',
        url: 'https://pokeapi.co/api/v2/move/74/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 34,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 34,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 32,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 32,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 32,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 32,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 32,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 32,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 32,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 6,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 6,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 6,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'razor-leaf',
        url: 'https://pokeapi.co/api/v2/move/75/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 20,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 20,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 20,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 20,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 20,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 19,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 19,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 19,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 19,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 20,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 20,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 19,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 19,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 19,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 19,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 19,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 23,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 12,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 12,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 12,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'solar-beam',
        url: 'https://pokeapi.co/api/v2/move/76/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 48,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 48,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 46,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 46,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 46,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 46,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 46,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 46,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 46,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 36,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 36,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 36,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'poison-powder',
        url: 'https://pokeapi.co/api/v2/move/77/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 20,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 20,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 14,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sleep-powder',
        url: 'https://pokeapi.co/api/v2/move/79/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 41,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 41,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 13,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 14,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 15,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'petal-dance',
        url: 'https://pokeapi.co/api/v2/move/80/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'string-shot',
        url: 'https://pokeapi.co/api/v2/move/81/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'toxic',
        url: 'https://pokeapi.co/api/v2/move/92/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rage',
        url: 'https://pokeapi.co/api/v2/move/99/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mimic',
        url: 'https://pokeapi.co/api/v2/move/102/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
      ],
    },
    {
      move: {
        name: 'double-team',
        url: 'https://pokeapi.co/api/v2/move/104/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'defense-curl',
        url: 'https://pokeapi.co/api/v2/move/111/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
      ],
    },
    {
      move: {
        name: 'light-screen',
        url: 'https://pokeapi.co/api/v2/move/113/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'reflect',
        url: 'https://pokeapi.co/api/v2/move/115/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bide',
        url: 'https://pokeapi.co/api/v2/move/117/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sludge',
        url: 'https://pokeapi.co/api/v2/move/124/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'skull-bash',
        url: 'https://pokeapi.co/api/v2/move/130/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'amnesia',
        url: 'https://pokeapi.co/api/v2/move/133/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'flash',
        url: 'https://pokeapi.co/api/v2/move/148/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rest',
        url: 'https://pokeapi.co/api/v2/move/156/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'substitute',
        url: 'https://pokeapi.co/api/v2/move/164/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'red-blue',
            url: 'https://pokeapi.co/api/v2/version-group/1/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'yellow',
            url: 'https://pokeapi.co/api/v2/version-group/2/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'snore',
        url: 'https://pokeapi.co/api/v2/move/173/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'curse',
        url: 'https://pokeapi.co/api/v2/move/174/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'protect',
        url: 'https://pokeapi.co/api/v2/move/182/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sludge-bomb',
        url: 'https://pokeapi.co/api/v2/move/188/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mud-slap',
        url: 'https://pokeapi.co/api/v2/move/189/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'outrage',
        url: 'https://pokeapi.co/api/v2/move/200/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
      ],
    },
    {
      move: {
        name: 'giga-drain',
        url: 'https://pokeapi.co/api/v2/move/202/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'endure',
        url: 'https://pokeapi.co/api/v2/move/203/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'charm',
        url: 'https://pokeapi.co/api/v2/move/204/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'false-swipe',
        url: 'https://pokeapi.co/api/v2/move/206/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'swagger',
        url: 'https://pokeapi.co/api/v2/move/207/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'fury-cutter',
        url: 'https://pokeapi.co/api/v2/move/210/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'attract',
        url: 'https://pokeapi.co/api/v2/move/213/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sleep-talk',
        url: 'https://pokeapi.co/api/v2/move/214/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'return',
        url: 'https://pokeapi.co/api/v2/move/216/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'frustration',
        url: 'https://pokeapi.co/api/v2/move/218/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'safeguard',
        url: 'https://pokeapi.co/api/v2/move/219/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sweet-scent',
        url: 'https://pokeapi.co/api/v2/move/230/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 25,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 21,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 24,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 24,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 24,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'synthesis',
        url: 'https://pokeapi.co/api/v2/move/235/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 39,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 39,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 39,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 39,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 39,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 39,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 39,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 27,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'hidden-power',
        url: 'https://pokeapi.co/api/v2/move/237/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sunny-day',
        url: 'https://pokeapi.co/api/v2/move/241/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rock-smash',
        url: 'https://pokeapi.co/api/v2/move/249/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'facade',
        url: 'https://pokeapi.co/api/v2/move/263/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'lets-go-pikachu-lets-go-eevee',
            url: 'https://pokeapi.co/api/v2/version-group/19/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'nature-power',
        url: 'https://pokeapi.co/api/v2/move/267/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'helping-hand',
        url: 'https://pokeapi.co/api/v2/move/270/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'ingrain',
        url: 'https://pokeapi.co/api/v2/move/275/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'knock-off',
        url: 'https://pokeapi.co/api/v2/move/282/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'secret-power',
        url: 'https://pokeapi.co/api/v2/move/290/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
      ],
    },
    {
      move: {
        name: 'weather-ball',
        url: 'https://pokeapi.co/api/v2/move/311/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'grass-whistle',
        url: 'https://pokeapi.co/api/v2/move/320/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'bullet-seed',
        url: 'https://pokeapi.co/api/v2/move/331/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'colosseum',
            url: 'https://pokeapi.co/api/v2/version-group/12/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'xd',
            url: 'https://pokeapi.co/api/v2/version-group/13/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'magical-leaf',
        url: 'https://pokeapi.co/api/v2/move/345/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ruby-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/5/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'emerald',
            url: 'https://pokeapi.co/api/v2/version-group/6/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'firered-leafgreen',
            url: 'https://pokeapi.co/api/v2/version-group/7/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'natural-gift',
        url: 'https://pokeapi.co/api/v2/move/363/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'worry-seed',
        url: 'https://pokeapi.co/api/v2/move/388/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 31,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 31,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 31,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 31,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 31,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 31,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 31,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 31,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 31,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 30,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 30,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 30,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'seed-bomb',
        url: 'https://pokeapi.co/api/v2/move/402/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 37,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 37,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 37,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 37,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 37,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 37,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 37,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 37,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 37,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 18,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 18,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 18,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'energy-ball',
        url: 'https://pokeapi.co/api/v2/move/412/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'leaf-storm',
        url: 'https://pokeapi.co/api/v2/move/437/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'power-whip',
        url: 'https://pokeapi.co/api/v2/move/438/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 33,
          moveLearnMethod: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'captivate',
        url: 'https://pokeapi.co/api/v2/move/445/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
      ],
    },
    {
      move: {
        name: 'grass-knot',
        url: 'https://pokeapi.co/api/v2/move/447/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'diamond-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/8/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'platinum',
            url: 'https://pokeapi.co/api/v2/version-group/9/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'heartgold-soulsilver',
            url: 'https://pokeapi.co/api/v2/version-group/10/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'venoshock',
        url: 'https://pokeapi.co/api/v2/move/474/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'acid-spray',
        url: 'https://pokeapi.co/api/v2/move/491/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'round',
        url: 'https://pokeapi.co/api/v2/move/496/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
      ],
    },
    {
      move: {
        name: 'echoed-voice',
        url: 'https://pokeapi.co/api/v2/move/497/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'grass-pledge',
        url: 'https://pokeapi.co/api/v2/move/520/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-white',
            url: 'https://pokeapi.co/api/v2/version-group/11/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'black-2-white-2',
            url: 'https://pokeapi.co/api/v2/version-group/14/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'work-up',
        url: 'https://pokeapi.co/api/v2/move/526/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
      ],
    },
    {
      move: {
        name: 'grassy-terrain',
        url: 'https://pokeapi.co/api/v2/move/580/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          versionGroup: {
            name: 'brilliant-diamond-and-shining-pearl',
            url: 'https://pokeapi.co/api/v2/version-group/23/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'confide',
        url: 'https://pokeapi.co/api/v2/move/590/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'x-y',
            url: 'https://pokeapi.co/api/v2/version-group/15/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'omega-ruby-alpha-sapphire',
            url: 'https://pokeapi.co/api/v2/version-group/16/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'sun-moon',
            url: 'https://pokeapi.co/api/v2/version-group/17/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'ultra-sun-ultra-moon',
            url: 'https://pokeapi.co/api/v2/version-group/18/',
          },
        },
      ],
    },
    {
      move: {
        name: 'grassy-glide',
        url: 'https://pokeapi.co/api/v2/move/803/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'tutor',
            url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
          },
          versionGroup: {
            name: 'sword-shield',
            url: 'https://pokeapi.co/api/v2/version-group/20/',
          },
        },
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'tera-blast',
        url: 'https://pokeapi.co/api/v2/move/851/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'trailblaze',
        url: 'https://pokeapi.co/api/v2/move/885/',
      },
      versionGroupDetails: [
        {
          levelLearnedAt: 0,
          moveLearnMethod: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          versionGroup: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
  ],
  name: 'bulbasaur',
  order: 1,
  species: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
  },
  sprites: {
    backDefault:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    backFemale: null,
    backShiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    backShinyFemale: null,
    frontDefault: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    frontFemale: null,
    frontShiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    frontShinyFemale: null,
    other: {
      dreamWorld: {
        frontDefault:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        frontFemale: null,
      },
      home: {
        frontDefault:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
        frontFemale: null,
        frontShiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png',
        frontShinyFemale: null,
      },
      officialArtwork: {
        frontDefault:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        frontShiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
      },
      showDown: {
        backDefault:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showDown/back/1.gif',
        backFemale: null,
        backShiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showDown/back/shiny/1.gif',
        backShinyFemale: null,
        frontDefault:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showDown/1.gif',
        frontFemale: null,
        frontShiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showDown/shiny/1.gif',
        frontShinyFemale: null,
      },
    },
  },
  stats: [
    {
      baseStat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      baseStat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      baseStat: 49,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      baseStat: 65,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      baseStat: 65,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      baseStat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
  ],
  weight: 69,
};

export const Primary: Story = {
  render: () => <PokemonCardUI data={data} />,
};
