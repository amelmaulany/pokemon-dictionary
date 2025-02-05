import type { Meta, StoryObj } from '@storybook/react';
import MenuLink from './menu-link';
import { faContactBook, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';

const meta: Meta<typeof MenuLink> = {
  title: 'MenuLink',
  component: MenuLink,
};

export default meta;

type Story = StoryObj<typeof MenuLink>;

export const Primary: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <MenuLink href="/home" isActiveMenu icon={faShareFromSquare}>
        Home
      </MenuLink>
      <MenuLink href="/account" isActiveMenu={false} icon={faContactBook}>
        Account
      </MenuLink>
    </div>
  ),
};
