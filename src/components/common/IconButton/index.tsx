interface IIconButtonProps {
  name: string;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export default function IconButton({
  name,
  className,
  iconClassName,
  onClick,
}: IIconButtonProps) {
  return (
    <button
      type="button"
      className={`naxatw-flex naxatw-h-10 naxatw-w-10 naxatw-items-center
        naxatw-justify-center ${className}`}
      onClick={onClick}
    >
      <i className={`material-icons-outlined ${iconClassName}`}>{name}</i>
    </button>
  );
}
