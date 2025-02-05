'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import Image from 'next/image';
import { Pokemon } from 'pokenode-ts';
import { ReactTyped } from 'react-typed';

const PokemonFixedGif = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="fixed bottom-4 right-4 flex justify-end gap-3">
      <div className="relative h-fit w-64 rounded-md border border-neutral-300 bg-white px-3 py-1">
        <ReactTyped
          strings={[
            `Did you know my real size? I&apos;m ${_.round(pokemon.height * 0.1, 2)}m and ${_.round(pokemon.weight * 0.1, 2)}Kg! Quite big
          right?`,
          ]}
          className="font-mono text-sm text-neutral-700"
          typeSpeed={100}
          loop
        />
        <FontAwesomeIcon
          icon={faCaretDown}
          fontSize={14}
          className="absolute bottom-0 right-2 animate-bounce text-neutral-400"
        />
      </div>
      <Image
        src={(pokemon.sprites.other as any)['showdown']['front_default']}
        alt={pokemon.name}
        width={80}
        height={80}
      />
    </div>
  );
};

export default PokemonFixedGif;
