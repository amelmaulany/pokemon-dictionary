import axios from 'axios';
import { notFound } from 'next/navigation';
// import { Move } from 'pokenode-ts';

const PokemonMove = async ({ url }: { url: string }) => {
  const response = await axios.get(url).then((res) => res);

  if (!response) notFound();
  //   const move: Move = response.data;
  return <tr>{/* <td>{move.}</td> */}</tr>;
};

export default PokemonMove;
