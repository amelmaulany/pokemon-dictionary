import { notFound } from 'next/navigation';
import { getType } from 'pokemon/infrastructure/api/types/get-type';
import PokemonTypeOverviewSection from './overview-section';
import PokemonListSection from './pokemon-list-section';
import SlugPageContainer from 'pokemon/components/presenters/slug-page-container/slug-page-container';
import DamageRelationsSection from './damage-relations-section';
import MovesSection from './moves-section';

export const metadata = {
  title: 'Pokémon Type Details',
  description: 'Pokémon Type Details',
};

const PokemonTypeDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const type = (await params).slug;

  const data = await getType(type);

  console.log('data: ', data);

  if (!data) notFound();
  return (
    <SlugPageContainer>
      <PokemonTypeOverviewSection data={data} />
      <div className="flex gap-3">
        <DamageRelationsSection data={data} />
        <MovesSection data={data.moves} />
      </div>
      <PokemonListSection data={data} />
    </SlugPageContainer>
  );
};

export default PokemonTypeDetails;
