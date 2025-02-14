import PokemonCard from 'pokemon/components/containers/pokemon-card/pokemon-card';
import DetailsDataContainer from 'pokemon/components/presenters/details-data-container/details-data-container';
import { PokemonTypeEntity } from 'pokemon/domain/entities/pokemon-type';

type PokemonListSectionProps = {
  data: PokemonTypeEntity;
};

const PokemonListSection = ({ data }: PokemonListSectionProps) => {
  return (
    <DetailsDataContainer title="Pokemons">
      <div className="grid grid-cols-4 gap-3">
        {data.pokemon.map((p, i) => (
          <PokemonCard url={p.pokemon.url} key={i} />
        ))}
      </div>
    </DetailsDataContainer>
  );
};

export default PokemonListSection;
