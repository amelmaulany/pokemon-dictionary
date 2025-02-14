import axios from 'axios';
import * as Table from 'pokemon/components/presenters/table/table';
import { Move, NamedAPIResource } from 'pokenode-ts';

const MoveRowSection = async ({ initialData }: { initialData: NamedAPIResource }) => {
  const move: Move | undefined = await axios.get(initialData.url).then((res) => res.data);

  if (!move)
    return (
      <Table.Tr>
        <Table.Td>{initialData.name}</Table.Td>
        <Table.Td>
          <span className="text-neutral-400">No data</span>
        </Table.Td>
        <Table.Td>
          <span className="text-neutral-400">No data</span>
        </Table.Td>
      </Table.Tr>
    );
  return (
    <Table.Tr>
      <Table.Td>{move.names.find((n) => n.language.name === 'en')?.name || move.name}</Table.Td>
      <Table.Td>{move.power}</Table.Td>
      <Table.Td>{move.pp}</Table.Td>
    </Table.Tr>
  );
};

export default MoveRowSection;
