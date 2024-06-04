import React from "react";

function FormInput({ name, label, type }) {
  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={name} className="capitalize mb-1 text-gray-900">
        {label || name}
      </label>
      <input
        type={type}
        id={name}
        autoComplete="off"
        autoSave="off"
        className="rounded-lg p-2  border-gray-700 bg-blue-100 focus:outline-none focus:ring-2"
      />
    </div>
  );
}

export default FormInput;
