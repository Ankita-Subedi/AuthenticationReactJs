import React, { useState } from "react";

const Input = ({ label = "Label", placeholder, type, name }) => {
  return (
    <div className="max-w-sm">
      <label
        htmlFor="input-label"
        className="block text-xl font-medium mb-2 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id="input-label"
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-xl focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 mb-3"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
