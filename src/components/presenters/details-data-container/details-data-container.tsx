import { ReactNode } from 'react';

const DetailsDataContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-fit w-full flex-col gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2">
      {children}
    </div>
  );
};

export default DetailsDataContainer;
