import axios from 'axios';
import _ from 'lodash';
import { notFound } from 'next/navigation';
import { Ability } from 'pokenode-ts';

const PokemonAbility = async ({ url }: { url: string }) => {
  const response = await axios.get(url).then((res) => res);

  if (!response) notFound();
  const ability: Ability = response.data;
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold capitalize text-neutral-800">{ability.name}</span>
      <div className="flex flex-col">
        <span className="text-xs text-neutral-600">
          {_.find(ability.effect_entries, (entry) => entry.language.name === 'en')?.effect || '-'}
        </span>
      </div>
    </div>
  );
};

export default PokemonAbility;
