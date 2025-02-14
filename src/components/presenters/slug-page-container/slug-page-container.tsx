import { ReactNode } from 'react';

const SlugPageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="relative flex flex-col gap-3">{children}</div>;
};
export default SlugPageContainer;
