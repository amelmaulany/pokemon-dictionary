import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type LinkIconProps = {
  icon: IconProp;
  href: string;
};

const LinkIcon = ({ href, icon }: LinkIconProps) => {
  return (
    <Link
      className="flex h-6 w-6 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100"
      href={href}
      target="_blank"
    >
      <FontAwesomeIcon icon={icon} fixedWidth fontSize={12} />
    </Link>
  );
};

export default LinkIcon;
