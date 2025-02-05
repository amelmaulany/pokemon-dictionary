import { notFound } from 'next/navigation';
import { getAllTypes } from '../../infrastructure/api/types/get-all-types';

const PokemonTypesPage = async () => {
  const types = await getAllTypes();

  if (!types) notFound();
  return types.results.map((res, i) => (
    <div key={i} className="rounded-md border px-3 py-2">
      {res.name}
    </div>
  ));
};

export default PokemonTypesPage;
