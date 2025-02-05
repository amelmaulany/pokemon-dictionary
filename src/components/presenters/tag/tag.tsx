import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hexaRgb from 'hex-rgb';

type TagProps = {
  label: string;
  icon: IconProp;
  color: string;
};

const Tag = ({ color, icon, label }: TagProps) => {
  const rgbColor = hexaRgb(color);

  return (
    <div
      style={{
        border: `1px solid ${color}`,
        backgroundColor: `rgba(${rgbColor.red}, ${rgbColor.green}, ${rgbColor.blue}, 0.1  )`,
        color,
      }}
      className="flex items-center gap-1 rounded-md bg-white px-[6px] py-[2px] text-xs"
    >
      <FontAwesomeIcon icon={icon} fixedWidth fontSize={14} />
      <span>{label}</span>
    </div>
  );
};

export default Tag;
