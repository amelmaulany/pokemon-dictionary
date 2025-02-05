import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type MenuLinkProps = {
  isActiveMenu: boolean;
  href: string;
  children: string;
  icon: IconProp;
};

const MenuLink = ({ href, isActiveMenu, children, icon }: MenuLinkProps) => {
  return (
    <Link
      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${isActiveMenu ? 'cursor-default bg-cyan-900 bg-opacity-75 text-white' : 'text-neutral-500 hover:text-neutral-950'}`}
      href={href}
    >
      <FontAwesomeIcon icon={icon} fixedWidth fontSize={12} />
      {children}
    </Link>
  );
};

export default MenuLink;
