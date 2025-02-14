import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PokemonTypeEntity } from 'pokemon/domain/entities/pokemon-type';
import { PokemonType } from 'pokemon/domain/value-objects/pokemon-type';

type PokemonTypeOverviewProps = {
  data: PokemonTypeEntity;
};

const PokemonTypeOverviewSection = ({ data }: PokemonTypeOverviewProps) => {
  const typeProps = PokemonType.getByName(data.name);
  return (
    <div className="flex items-center gap-2">
      <div
        style={{ backgroundColor: typeProps.color }}
        className="flex aspect-square items-center justify-center rounded-full p-3"
      >
        <FontAwesomeIcon icon={typeProps.icon} fontSize={28} className="text-white" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xl font-semibold">
          {data.names.find((n) => n.language.name === 'en')?.name || data.name}
        </span>
        <span className="text-xs text-neutral-500">
          {data.pokemon.length} pokemon{data.pokemon.length > 1 ? 's' : ''} | {data.moves.length}{' '}
          move{data.moves.length > 1 ? 's' : ''}
        </span>
      </div>
    </div>
  );
};

export default PokemonTypeOverviewSection;
