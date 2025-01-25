import { notFound } from 'next/navigation';
import { getAllTypes } from '../../infrastructure/api/types/get-all-types';
import PokemonTypeCard from 'pokemon/components/containers/pokemon-type/pokemon-type';

const PokemonTypesPage = async () => {
  const types = await getAllTypes();

  if (!types) notFound();
  return (
    <div className="grid grid-cols-4 gap-3">
      {types.results.map((res, i) => (
        <PokemonTypeCard data={res} key={i} />
      ))}
    </div>
  );
};

export default PokemonTypesPage;
