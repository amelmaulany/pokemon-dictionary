export type PokemonSpritesEntity = {
  frontDefault: string | null;
  frontShiny: string | null;
  frontFemale: string | null;
  frontShinyFemale: string | null;
  backDefault: string | null;
  backShiny: string | null;
  backFemale: string | null;
  backShinyFemale: string | null;
  other: {
    dreamWorld: {
      frontDefault: string | null;
      frontFemale: string | null;
    };
    home: {
      frontDefault: string | null;
      frontFemale: string | null;
      frontShiny: string | null;
      frontShinyFemale: string | null;
    };
    officialArtwork: {
      frontDefault: string | null;
      frontShiny: string | null;
    };
    showDown: {
      backDefault: string | null;
      backFemale: string | null;
      backShiny: string | null;
      backShinyFemale: string | null;
      frontDefault: string | null;
      frontFemale: string | null;
      frontShiny: string | null;
      frontShinyFemale: string | null;
    } | null;
  } | null;
};
