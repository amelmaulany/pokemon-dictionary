import _ from 'lodash';

const Title = ({ children }: { children: string }) => {
  return <span className="text-3xl font-semibold text-neutral-800">{_.capitalize(children)}</span>;
};

export default Title;
