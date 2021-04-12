import React from "react";

interface IButtonProps {
  onClick: Function;
  label: string;
  className?: string;
}

const Button = ({ label, onClick, className }: IButtonProps) => {
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
    <button className={styles} onClick={() => onClick()}>
      {label.toLocaleUpperCase()}
    </button>
  );
};

export default Button;
