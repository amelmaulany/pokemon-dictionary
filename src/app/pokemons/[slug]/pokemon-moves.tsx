import { Pokemon } from 'pokenode-ts';
import * as Table from 'pokemon/components/presenters/table/table';

const PokemonMovesTable = ({ pokemon }: { pokemon: Pokemon }) => {
  console.log(pokemon);
  return (
    <Table.Root>
      <Table.Head>
        <Table.HeadTr>
          <Table.Th>Level</Table.Th>
          <Table.Th>Name</Table.Th>
        </Table.HeadTr>
      </Table.Head>
    </Table.Root>
  );
};

export default PokemonMovesTable;
