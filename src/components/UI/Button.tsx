import { FunctionComponent } from "react";

interface IButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: Function;
  className?: string;
  variant?: "filled" | "outlined";
}

const Button: FunctionComponent<IButtonProps> = ({
  label,
  onClick,
  className,
  type,
  variant = "filled",
}) => {
  const filledStyles = "text-white bg-indigo-500 hover:bg-indigo-600";
  const outlinedStyles = "bg-white text-indigo-500 hover:bg-indigo-100";
  const styles = [
    "p-2",
    "font-semibold",
    "rounded-md",
    "shadow-md",
    "transition-colors",
    variant === "filled" ? filledStyles : outlinedStyles,
    className,
  ].join(" ");
  return (
    <button className={styles} onClick={() => onClick && onClick()} type={type}>
      {label.toLocaleUpperCase()}
    </button>
  );
};

export default Button;
