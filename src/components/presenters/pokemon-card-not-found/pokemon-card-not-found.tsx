import { faTriangleExclamation } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PokemonCardNotFound = () => {
  return (
    <div className="flex h-[90px] w-full flex-col items-center gap-3 rounded-lg border border-neutral-300 bg-neutral-50">
      <FontAwesomeIcon icon={faTriangleExclamation} fontSize={20} fixedWidth />
      <span className="text-base text-neutral-700">Pokemon not found.</span>
    </div>
  );
};

export default PokemonCardNotFound;
