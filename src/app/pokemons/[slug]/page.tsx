import _ from 'lodash';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPokemonByName } from 'pokemon/infrastructure/api/pokemons/get-pokemon-by-name';
import Tag from 'pokemon/components/presenters/tag/tag';
import getPokemonFormattedOrder from 'pokemon/domain/services/get-pokemon-order';
import getPokemonTypeName from 'pokemon/domain/services/get-pokemon-type-name';
import PokemonEncountersTable from './encounters-table';
import PokemonFixedGif from './pokemon-fixed-gif';
import DetailsDataContainer from 'pokemon/components/presenters/details-data-container/details-data-container';
import PokemonAbility from './pokemon-ability';
// import PokemonMovesTable from './pokemon-moves';
import { PokemonType } from 'pokemon/domain/value-objects/pokemon-type';

const PokemonSlugPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const name = (await params).slug;

  const pokemon = await getPokemonByName(name);

  const subtitle = 'text-base font-semibold text-neutral-700';

  if (!pokemon) notFound();
  return (
    <div className="relative flex flex-col gap-2">
      <PokemonFixedGif pokemon={pokemon} />
      <div className="flex items-center gap-8">
        {pokemon.sprites.other && pokemon.sprites.other['official-artwork'].front_default && (
          <Image
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            width={200}
            height={200}
            className="z-[999] group-hover:opacity-100"
          />
        )}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-3xl font-semibold text-neutral-800">
              {_.capitalize(pokemon.name)}
            </span>
            <span className="text-base italic text-neutral-500">
              {getPokemonFormattedOrder(pokemon.order)}
            </span>
          </div>
          <div className="flex gap-1">
            {pokemon.types.map((type, i) => {
              const { color, icon } = PokemonType.getByName(getPokemonTypeName(type));
              return (
                <Tag
                  key={i}
                  color={color}
                  icon={icon}
                  label={_.capitalize(getPokemonTypeName(type))}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {pokemon.location_area_encounters.length > 0 && (
          <DetailsDataContainer>
            <span className={subtitle}>Encounters</span>
            <div className="w-full overflow-x-auto pb-3">
              <PokemonEncountersTable url={pokemon.location_area_encounters} />
            </div>
          </DetailsDataContainer>
        )}

        <div className="grid grid-cols-2 gap-3">
          <DetailsDataContainer>
            <span className={subtitle}>Abilities</span>
            <div className="flex flex-col gap-3">
              {pokemon.abilities.map((ability, i) => (
                <PokemonAbility key={i} url={ability.ability.url} />
              ))}
            </div>
          </DetailsDataContainer>

          {/* <DetailsDataContainer>
            <span className={subtitle}>Moves</span>
            <PokemonMovesTable pokemon={pokemon} />
          </DetailsDataContainer> */}
        </div>
      </div>
    </div>
  );
};

export default PokemonSlugPage;
