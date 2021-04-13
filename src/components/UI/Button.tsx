import { FunctionComponent } from "react";

interface IButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: Function;
  className?: string;
}

const Button: FunctionComponent<IButtonProps> = ({
  label,
  onClick,
  className,
  type,
}) => {
  const styles = [
    "p-2",
    "bg-indigo-500",
    "font-semibold",
    "text-white",
    "hover:bg-indigo-600",
    "rounded-md",
    className,
  ].join(" ");
  return (
    <button className={styles} onClick={() => onClick && onClick()} type={type}>
      {label.toLocaleUpperCase()}
    </button>
  );
};

export default Button;
