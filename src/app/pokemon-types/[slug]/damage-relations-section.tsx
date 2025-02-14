import DetailsDataContainer from 'pokemon/components/presenters/details-data-container/details-data-container';
import { PokemonTypeEntity } from 'pokemon/domain/entities/pokemon-type';
import * as Table from 'pokemon/components/presenters/table/table';
import { PokemonType } from 'pokemon/domain/value-objects/pokemon-type';
import Tag from 'pokemon/components/presenters/tag/tag';
import _ from 'lodash';
import { getAllTypes } from 'pokemon/infrastructure/api/types/get-all-types';

type DamageRelationsSectionProps = {
  data: PokemonTypeEntity;
};

const DamageRelationsSection = async ({ data }: DamageRelationsSectionProps) => {
  const {
    doubleDamageFrom,
    doubleDamageTo,
    halfDamageFrom,
    halfDamageTo,
    noDamageFrom,
    noDamageTo,
  } = data.damageRelations;
  const damageFromArr = [
    ...doubleDamageFrom.map((d) => d.name),
    ...halfDamageFrom.map((d) => d.name),
    ...noDamageFrom.map((d) => d.name),
  ];
  const damageToArr = [
    ...doubleDamageTo.map((d) => d.name),
    ...halfDamageTo.map((d) => d.name),
    ...noDamageTo.map((d) => d.name),
  ];

  const allTypes = await getAllTypes().then((res) => res?.results || []);

  const damageFromArr1x = allTypes.filter(
    (r) => r.name !== data.name && !damageFromArr.includes(r.name),
  );
  const damageToArr1x = allTypes.filter(
    (r) => r.name !== data.name && !damageToArr.includes(r.name),
  );

  const typeColumnStyle = 'flex items-center gap-2 flex-wrap p-2';

  return (
    <DetailsDataContainer title="Damage Relations">
      <Table.Root>
        <Table.Head>
          <Table.HeadTr>
            <Table.Th>Damage Type</Table.Th>
            <Table.Th>Damage Count</Table.Th>
            <Table.Th>Pokemon Type</Table.Th>
          </Table.HeadTr>
        </Table.Head>
        <Table.Body>
          <Table.Tr>
            <Table.Td rowSpan={4}>From</Table.Td>
            <Table.Td>2x</Table.Td>
            <Table.Td>
              <div className={typeColumnStyle}>
                {doubleDamageFrom.map((damage, i) => {
                  const { color, icon, name } = PokemonType.getByName(damage.name);
                  return <Tag key={i} color={color} icon={icon} label={_.capitalize(name)} />;
                })}
              </div>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>1x</Table.Td>
            <Table.Td>
              <div className={typeColumnStyle}>
                {damageFromArr1x.map((damage, i) => {
                  const { color, icon, name } = PokemonType.getByName(damage.name);
                  return <Tag key={i} color={color} icon={icon} label={_.capitalize(name)} />;
                })}
              </div>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>1/2x</Table.Td>
            <Table.Td>
              <div className={typeColumnStyle}>
                {halfDamageFrom.map((damage, i) => {
                  const { color, icon, name } = PokemonType.getByName(damage.name);
                  return <Tag key={i} color={color} icon={icon} label={_.capitalize(name)} />;
                })}
              </div>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>0x</Table.Td>
            <Table.Td>
              <div className={typeColumnStyle}>
                {noDamageFrom.map((damage, i) => {
                  const { color, icon, name } = PokemonType.getByName(damage.name);
                  return <Tag key={i} color={color} icon={icon} label={_.capitalize(name)} />;
                })}
              </div>
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Td rowSpan={4}>To</Table.Td>
            <Table.Td>2x</Table.Td>
            <Table.Td>
              <div className={typeColumnStyle}>
                {doubleDamageTo.map((damage, i) => {
                  const { color, icon, name } = PokemonType.getByName(damage.name);
                  return <Tag key={i} color={color} icon={icon} label={_.capitalize(name)} />;
                })}
              </div>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>1x</Table.Td>
            <Table.Td>
              <div className={typeColumnStyle}>
                {damageToArr1x.map((damage, i) => {
                  const { color, icon, name } = PokemonType.getByName(damage.name);
                  return <Tag key={i} color={color} icon={icon} label={_.capitalize(name)} />;
                })}
              </div>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>1/2x</Table.Td>
            <Table.Td>
              <div className={typeColumnStyle}>
                {halfDamageTo.map((damage, i) => {
                  const { color, icon, name } = PokemonType.getByName(damage.name);
                  return <Tag key={i} color={color} icon={icon} label={_.capitalize(name)} />;
                })}
              </div>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>0x</Table.Td>
            <Table.Td>
              <div className={typeColumnStyle}>
                {noDamageTo.map((damage, i) => {
                  const { color, icon, name } = PokemonType.getByName(damage.name);
                  return <Tag key={i} color={color} icon={icon} label={_.capitalize(name)} />;
                })}
              </div>
            </Table.Td>
          </Table.Tr>
        </Table.Body>
      </Table.Root>
    </DetailsDataContainer>
  );
};

export default DamageRelationsSection;
