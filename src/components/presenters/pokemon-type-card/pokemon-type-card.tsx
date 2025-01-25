import { PokemonTypeEntity } from 'pokemon/domain/entities/pokemon-type';
import { PokemonType } from 'pokemon/domain/value-objects/pokemon-type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type PokemonTypeCard = {
  data: PokemonTypeEntity;
};

const PokemonTypeCardUI = ({ data }: PokemonTypeCard) => {
  const typeProp = PokemonType.getByName(data.name);

  return (
    <Link
      href={`/pokeon-types/${data.name}`}
      className="flex items-center gap-2 rounded-md border bg-neutral-50 px-[10px] py-2 hover:opacity-70"
    >
      <div
        style={{
          backgroundColor: typeProp.color,
        }}
        className="flex aspect-square items-center justify-center rounded-full p-2"
      >
        <FontAwesomeIcon icon={typeProp.icon} className="text-white" fixedWidth fontSize={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-neutral-700">
          {data.names.find((n) => n.language.name === 'en')?.name}
        </span>
        <span className="text-xs text-neutral-500">
          {data.pokemon.length} pokemon{data.pokemon.length > 1 ? 's' : ''} | {data.moves.length}{' '}
          move{data.moves.length > 1 ? 's' : ''}
        </span>
      </div>
    </Link>
  );
};

export default PokemonTypeCardUI;
