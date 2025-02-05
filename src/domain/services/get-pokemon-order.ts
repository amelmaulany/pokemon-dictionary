import _ from 'lodash';

const getPokemonFormattedOrder = (order: number) => {
  return `#${_.padStart(order.toString(), 4, '0')}`;
};

export default getPokemonFormattedOrder;
