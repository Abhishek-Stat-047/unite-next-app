import Image from "next/image";

interface ActionChipProps {
  label: string;
  iconSrc: string;
  alt: string;
  className?: string;
}

const ActionChip: React.FC<ActionChipProps> = ({
  label,
  iconSrc,
  alt = "",
  className = "",
}) => {
  return (
    <div className={`grid place-items-center ${className}`}>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400 text-blue-500 text-sm font-medium hover:bg-blue-50 cursor-pointer transition">
        <Image alt={alt} className="w-4 h-4" src={iconSrc} />
        <span>{label}</span>
      </div>
    </div>
  );
};

export default ActionChip;
