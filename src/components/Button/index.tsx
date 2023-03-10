import React from "react";
import "./button.css";
interface IButtonProps extends HTMLButtonElement {
  title: string;
}

export const Button = ({ title, ...buttonProps }: IButtonProps) => {
  return (
    <button {...buttonProps} className="button">
      {title}
    </button>
  );
};
