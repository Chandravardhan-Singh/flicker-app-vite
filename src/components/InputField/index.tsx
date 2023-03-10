import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import "./inputField.css";
interface IInputFieldProps {
  label: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export const InputField = (props: IInputFieldProps) => {
  const { label, type } = props;
  return (
    <div className="flex input-container">
      <label className="flex input-label" htmlFor={label}>
        {label}
      </label>
      <input
        type={type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        id={label}
        className="flex input-field"
      />
    </div>
  );
};
