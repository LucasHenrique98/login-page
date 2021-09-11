import React from 'react';

export default function Input({ inputType, inputName, ...props }) {
  return <input type={inputType} name={inputName} props />;
}
