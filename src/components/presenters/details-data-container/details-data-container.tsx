import { ReactNode } from 'react';
import Subtitle from '../subtitle/subtitle';

const DetailsDataContainer = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div className="flex h-fit max-h-[calc(100vh-150px)] w-full flex-col gap-2 overflow-y-auto rounded-md border border-neutral-200 bg-white px-4 py-2">
      <Subtitle>{title}</Subtitle>
      {children}
    </div>
  );
};

export default DetailsDataContainer;
