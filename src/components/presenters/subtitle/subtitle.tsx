import _ from 'lodash';

const Subtitle = ({ children }: { children: string }) => {
  return <span className="text-base font-semibold text-neutral-700">{_.capitalize(children)}</span>;
};

export default Subtitle;
