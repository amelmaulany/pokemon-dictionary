import axios from 'axios';
import PokemonCardUI from 'pokemon/components/presenters/pokemon-card/pokemon-card';
import { PokemonEntity } from 'pokemon/domain/entities/pokemon';
import { PokemonResponseToEntity } from 'pokemon/infrastructure/mappers/pokemon';
import { NamedAPIResource } from 'pokenode-ts';

type PokemonCardProps = {
  data: NamedAPIResource;
};

const PokemonCard = async ({ data }: PokemonCardProps) => {
  const response: PokemonEntity | undefined = await axios.get(data.url).then((res) => {
    return PokemonResponseToEntity.map(res.data);
  });

  if (!response) return undefined;
  return <PokemonCardUI data={response} />;
};

export default PokemonCard;
