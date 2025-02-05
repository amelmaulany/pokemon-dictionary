import Image from 'next/image';
import Logo from '../../public/blue-logo.svg';

const TopBar = async () => {
  return (
    <div className="flex h-14 w-full items-center justify-start gap-5 border-b border-b-neutral-200 bg-white px-4 py-2">
      <Image src={Logo} alt="logo" height={40} />
    </div>
  );
};

export default TopBar;
