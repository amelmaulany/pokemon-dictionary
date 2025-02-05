'use client';

import _ from 'lodash';
import { usePathname } from 'next/navigation';
import MenuLink from 'pokemon/components/presenters/menu-link/menu-link';
import { menus } from 'pokemon/enum/menu';

const Sidebar = () => {
  const path = usePathname();
  const getRootMenu = (url: string) => _.split(url, '/')[1];

  return (
    <div className="flex w-60 flex-col bg-neutral-100 p-2">
      {menus.map((menu, i) => (
        <MenuLink
          key={i}
          href={menu.href}
          isActiveMenu={getRootMenu(path) === getRootMenu(menu.href)}
          icon={menu.icon}
        >
          {menu.label}
        </MenuLink>
      ))}
    </div>
  );
};
export default Sidebar;
