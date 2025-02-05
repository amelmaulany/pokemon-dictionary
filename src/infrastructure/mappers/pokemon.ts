import { PokemonEntity } from 'pokemon/domain/entities/pokemon';
import { Pokemon } from 'pokenode-ts';

export class PokemonResponseToEntity {
  static map(response: Pokemon): PokemonEntity {
    return {
      id: response.id,
      abilities: response.abilities.map((a) => ({
        ability: a.ability,
        isHidden: a.is_hidden,
        slot: a.slot,
      })),
      baseExperience: response.base_experience,
      forms: response.forms,
      gameIndices: response.game_indices.map((g) => ({
        gameIndex: g.game_index,
        version: g.version,
      })),
      height: response.height,
      heldItems: response.held_items.map((h) => ({
        item: h.item,
        versionDetails: h.version_details,
      })),
      isDefault: response.is_default,
      locationAreaEncounters: response.location_area_encounters,
      moves: response.moves.map((m) => ({
        move: m.move,
        versionGroupDetails: m.version_group_details.map((v) => ({
          moveLearnMethod: v.move_learn_method,
          versionGroup: v.version_group,
          levelLearnedAt: v.level_learned_at,
        })),
      })),
      name: response.name,
      order: response.order,
      species: response.species,
      sprites: {
        frontDefault: response.sprites.front_default,
        frontShiny: response.sprites.front_shiny,
        frontFemale: response.sprites.front_female,
        frontShinyFemale: response.sprites.front_shiny_female,
        backDefault: response.sprites.back_default,
        backShiny: response.sprites.back_shiny,
        backFemale: response.sprites.back_female,
        backShinyFemale: response.sprites.back_shiny_female,
        other: response.sprites.other
          ? {
              dreamWorld: {
                frontDefault: response.sprites.other.dream_world.front_default,
                frontFemale: response.sprites.other.dream_world.front_female,
              },
              home: {
                frontDefault: response.sprites.other.home.front_default,
                frontFemale: response.sprites.other.home.front_female,
                frontShiny: response.sprites.other.home.front_shiny,
                frontShinyFemale: response.sprites.other.home.front_shiny_female,
              },
              officialArtwork: {
                frontDefault: response.sprites.other['official-artwork'].front_default,
                frontShiny: null,
              },
              showDown: null,
            }
          : null,
      },
      stats: response.stats.map((s) => ({
        baseStat: s.base_stat,
        effort: s.effort,
        stat: s.stat,
      })),
      types: response.types,
      weight: response.weight,
    };
  }
  static mapList(responses: Pokemon[]): PokemonEntity[] {
    return responses.map(PokemonResponseToEntity.map);
  }
}
