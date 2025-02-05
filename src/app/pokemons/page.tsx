import { NamedAPIResourceList } from 'pokenode-ts';
import { getAllPokemons } from '../../infrastructure/api/pokemons/get-all-pokemons';
import { notFound } from 'next/navigation';
import PokemonCard from 'pokemon/components/containers/pokemon-card/pokemon-card';

export const metadata = {
  title: 'Pokémons',
  description: 'Pokémons',
};

export default async function PokemonsPage() {
  const pokemons: void | NamedAPIResourceList = await getAllPokemons();
  if (!pokemons) notFound();
  return (
    <div className="grid grid-cols-4 gap-3">
      {pokemons.results.map((res, i) => (
        <PokemonCard key={i} data={res} />
      ))}
    </div>
  );
}
