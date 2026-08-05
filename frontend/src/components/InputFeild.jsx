import React from 'react';

const InputFeild = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  error 
}) => {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-neutral-400">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all text-black dark:text-white ${
          error 
            ? 'border-red-500 focus:ring-red-200 text-red-900 placeholder-red-300' 
            : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'
        }`}
      />
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default InputFeild;