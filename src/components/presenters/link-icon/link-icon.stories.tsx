import { Meta, StoryObj } from '@storybook/react';
import LinkIcon from './link-icon';
import { faList } from '@fortawesome/pro-regular-svg-icons';

const meta: Meta<typeof LinkIcon> = {
  title: 'LinkIcon',
  component: LinkIcon,
};

export default meta;

type Story = StoryObj<typeof LinkIcon>;

export const Primary: Story = {
  render: () => <LinkIcon href="/pokemons" icon={faList} />,
};
