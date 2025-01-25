import { faExternalLink } from '@fortawesome/pro-regular-svg-icons';
import axios from 'axios';
import _ from 'lodash';
import { notFound } from 'next/navigation';
import LinkIcon from 'pokemon/components/presenters/link-icon/link-icon';
import { LocationAreaEncounter } from 'pokenode-ts';
import * as Table from 'pokemon/components/presenters/table/table';

const PokemonEncountersTable = async ({ url }: { url: string }) => {
  const locations = await axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  if (!locations) notFound();

  const spanStyle = 'capitalize text-sm line-clamp-1 whitespace-nowrap';

  return (
    <Table.Root>
      <Table.Head>
        <Table.HeadTr>
          <Table.Th>Location area</Table.Th>
          <Table.Th>Version</Table.Th>
          <Table.Th>Chance</Table.Th>
          <Table.Th>Min level</Table.Th>
          <Table.Th>Max level</Table.Th>
        </Table.HeadTr>
      </Table.Head>

      {locations.map((location: LocationAreaEncounter, i: number) => (
        <Table.Body key={i}>
          {location.version_details.map((detail, i) => (
            <tr key={i}>
              {i === 0 && (
                <Table.Td rowSpan={location.version_details.length}>
                  <div className="flex items-center gap-2">
                    <span className={spanStyle}>
                      {_.split(location.location_area.name, '-').join(' ')}
                    </span>
                    <LinkIcon icon={faExternalLink} href={location.location_area.url} />
                  </div>
                </Table.Td>
              )}
              <Table.Td>
                <span className={spanStyle}>{detail.version.name}</span>
              </Table.Td>
              <Table.Td>
                <span className={spanStyle}>{detail.encounter_details[0].chance}</span>
              </Table.Td>
              <Table.Td>
                <span className={spanStyle}>{detail.encounter_details[0].min_level}</span>
              </Table.Td>
              <Table.Td>
                <span className={spanStyle}>{detail.encounter_details[0].max_level}</span>
              </Table.Td>
            </tr>
          ))}
        </Table.Body>
      ))}
    </Table.Root>
  );
};

export default PokemonEncountersTable;
