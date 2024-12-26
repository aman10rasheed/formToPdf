import React from "react";

type Props = {
  label: string;
  name: string;
  type?: string; // Optional prop to specify the type of input
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change handler for input
  errorMessage?: string; // Optional error message
  isValid?: boolean; // Validation state (true = valid, false = invalid)
  className?: string; // Optional class name for styling
};

const InputField = ({ label, name, type = "text", value, onChange, className }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full">
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={label}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`block w-full px-3 py-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
      />
    </div>
  );
};

export default InputField;
