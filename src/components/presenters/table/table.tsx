import { ReactNode } from 'react';

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <table className="w-full border-collapse border-spacing-2 rounded-md text-neutral-600">
      {children}
    </table>
  );
};

export const Head = ({ children }: { children: ReactNode }) => {
  return <thead className="border border-neutral-400 bg-neutral-50">{children}</thead>;
};

export const Th = ({ children }: { children: string }) => {
  return (
    <th className="w-max whitespace-nowrap border border-neutral-400 px-2 py-1 text-sm font-medium">
      {children}
    </th>
  );
};

export const Td = ({
  children,
  colSpan,
  rowSpan,
}: {
  children: ReactNode;
  rowSpan?: number;
  colSpan?: number;
}) => {
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className="w-max whitespace-nowrap border border-neutral-400 bg-white px-2 py-1 text-sm"
    >
      {children}
    </td>
  );
};

export const HeadTr = ({ children }: { children: ReactNode }) => {
  return <tr className="text-left">{children}</tr>;
};

export const Body = ({ children }: { children: ReactNode }) => {
  return <tbody className="border border-neutral-400">{children}</tbody>;
};

export const Tr = ({ children }: { children: ReactNode }) => {
  return <tr className="border border-neutral-400">{children}</tr>;
};
