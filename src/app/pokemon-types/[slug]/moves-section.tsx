import * as Table from 'pokemon/components/presenters/table/table';
import MoveRowSection from './move-row-section';
import DetailsDataContainer from 'pokemon/components/presenters/details-data-container/details-data-container';
import { NamedAPIResource } from 'pokenode-ts';

type MovesSectionProps = {
  data: NamedAPIResource[];
};

const MovesSection = ({ data }: MovesSectionProps) => {
  return (
    <DetailsDataContainer title="Moves">
      <Table.Root>
        <Table.Head>
          <Table.HeadTr>
            <Table.Th>Move</Table.Th>
            <Table.Th>Power</Table.Th>
            <Table.Th>PP</Table.Th>
          </Table.HeadTr>
        </Table.Head>
        <Table.Body>
          {data.map((move, i) => (
            <MoveRowSection initialData={move} key={i} />
          ))}
        </Table.Body>
      </Table.Root>
    </DetailsDataContainer>
  );
};

export default MovesSection;
