import axios from 'axios';
import PokemonCardUI from 'pokemon/components/presenters/pokemon-card/pokemon-card';
import { PokemonEntity } from 'pokemon/domain/entities/pokemon';
import { PokemonResponseToEntity } from 'pokemon/infrastructure/mappers/pokemon';

type PokemonCardProps = {
  url: string;
};

const PokemonCard = async ({ url }: PokemonCardProps) => {
  const response: PokemonEntity | undefined = await axios.get(url).then((res) => {
    return PokemonResponseToEntity.map(res.data);
  });

  if (!response) return undefined;
  return <PokemonCardUI data={response} />;
};

export default PokemonCard;
