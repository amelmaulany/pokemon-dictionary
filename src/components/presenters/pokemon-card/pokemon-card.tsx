import Image from 'next/image';
import Link from 'next/link';
import getPokemonFormattedOrder from 'pokemon/domain/services/get-pokemon-order';
import _ from 'lodash';
import getPokemonTypeName from 'pokemon/domain/services/get-pokemon-type-name';
import getRgbColorByPokemonType from 'pokemon/domain/services/get-rgb-color-by-pokemon-type';
import { PokemonType } from 'pokemon/domain/value-objects/pokemon-type';
import { PokemonEntity } from 'pokemon/domain/entities/pokemon';
import { PokemonTypeName } from 'pokemon/domain/enums/pokemon-type';

type PokemonCardProps = {
  data: PokemonEntity;
};

const PokemonCardUI = ({ data }: PokemonCardProps) => {
  const rgbColor = getRgbColorByPokemonType(data.types[0].type.name as PokemonTypeName);

  return (
    <Link
      href={`/pokemons/${data.name}`}
      style={{
        backgroundColor: `rgba(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue}, 0.2)`,
        border: `1px solid ${PokemonType.getByName(data.types[0].type.name).color}`,
      }}
      className="group relative z-[999] flex w-full items-center gap-3 rounded-lg border border-neutral-300 px-3 py-2 hover:opacity-75"
    >
      {data.sprites.other && data.sprites.other.officialArtwork.frontDefault && (
        <Image
          src={data.sprites.other.officialArtwork.frontDefault}
          alt={data.name}
          width={60}
          height={60}
          className="z-[999] group-hover:opacity-100"
        />
      )}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="line-clamp-1 text-ellipsis text-lg font-semibold capitalize text-neutral-700">
            {data.name}
          </span>
          <span className="text-sm italic text-neutral-500">
            {getPokemonFormattedOrder(data.order)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="ml-1 flex">
            {data.types.map((type, i) => (
              <div
                key={i}
                style={{ backgroundColor: PokemonType.getByName(getPokemonTypeName(type)).color }}
                className="-ml-1 h-3 w-3 rounded-full"
              />
            ))}
          </div>
          <span className="text-xs">
            {_.join(
              data.types.map((type) => _.capitalize(getPokemonTypeName(type))),
              ', ',
            )}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCardUI;
