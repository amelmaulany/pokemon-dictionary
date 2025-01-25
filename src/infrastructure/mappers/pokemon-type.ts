import { PokemonTypeEntity } from 'pokemon/domain/entities/pokemon-type';
import { Type } from 'pokenode-ts';

export class PokemonTypeResponseToEntity {
  static map(response: Type): PokemonTypeEntity {
    return {
      id: response.id,
      damageRelations: {
        doubleDamageFrom: response.damage_relations.double_damage_from,
        doubleDamageTo: response.damage_relations.double_damage_to,
        halfDamageFrom: response.damage_relations.half_damage_from,
        halfDamageTo: response.damage_relations.half_damage_to,
        noDamageFrom: response.damage_relations.no_damage_from,
        noDamageTo: response.damage_relations.no_damage_to,
      },
      gameIndices: response.game_indices.map((g) => ({
        gameIndex: g.game_index,
        version: g.generation,
      })),
      generation: response.generation,
      moveDamageClass: response.move_damage_class,
      moves: response.moves,
      name: response.name,
      names: response.names,
      pastDamageRelations: response.past_damage_relations.map((p) => ({
        damageRelations: {
          doubleDamageFrom: p.damage_relations.double_damage_from,
          doubleDamageTo: p.damage_relations.double_damage_to,
          halfDamageFrom: p.damage_relations.half_damage_from,
          halfDamageTo: p.damage_relations.half_damage_to,
          noDamageFrom: p.damage_relations.no_damage_from,
          noDamageTo: p.damage_relations.no_damage_to,
        },
        generation: p.generation,
      })),
      pokemon: response.pokemon,
    };
  }

  static mapList(responses: Type[]): PokemonTypeEntity[] {
    return responses.map(PokemonTypeResponseToEntity.map);
  }
}
