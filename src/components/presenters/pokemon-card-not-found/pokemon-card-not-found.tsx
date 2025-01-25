import { faTriangleExclamation } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PokemonCardNotFound = () => {
  return (
    <div className="flex h-[90px] w-full flex-col items-center justify-center gap-1 rounded-lg border border-neutral-300 bg-neutral-50 p-3">
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        fontSize={24}
        fixedWidth
        className="text-red-300"
      />
      <span className="text-sm text-neutral-500">Pokemon not found.</span>
    </div>
  );
};

export default PokemonCardNotFound;
