import { Meta, StoryObj } from '@storybook/react';
import DetailsDataContainer from './details-data-container';

const meta: Meta<typeof DetailsDataContainer> = {
  title: 'DetailsDataContainer',
  component: DetailsDataContainer,
};

export default meta;

type Story = StoryObj<typeof DetailsDataContainer>;

export const Primary: Story = {
  render: () => (
    <DetailsDataContainer>
      <span>Lorem ipsum</span>
    </DetailsDataContainer>
  ),
};
