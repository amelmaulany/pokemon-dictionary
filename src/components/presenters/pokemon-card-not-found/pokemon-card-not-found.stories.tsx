import { Meta, StoryObj } from '@storybook/react';
import PokemonCardNotFound from './pokemon-card-not-found';

const meta: Meta<typeof PokemonCardNotFound> = {
  title: 'PokemonCardNotFound',
  component: PokemonCardNotFound,
};

export default meta;

type Story = StoryObj<typeof PokemonCardNotFound>;

export const Primary: Story = {
  render: () => <PokemonCardNotFound />,
};
