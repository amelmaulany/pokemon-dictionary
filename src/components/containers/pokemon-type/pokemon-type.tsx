import axios from 'axios';
import PokemonTypeCardUI from 'pokemon/components/presenters/pokemon-type-card/pokemon-type-card';
import { PokemonTypeResponseToEntity } from 'pokemon/infrastructure/mappers/pokemon-type';
import { NamedAPIResource } from 'pokenode-ts';

type PokemonTypeCardProps = {
  data: NamedAPIResource;
};

const PokemonTypeCard = async ({ data }: PokemonTypeCardProps) => {
  const type = await axios.get(data.url).then((res) => PokemonTypeResponseToEntity.map(res.data));

  return <PokemonTypeCardUI data={type} />;
};

export default PokemonTypeCard;
