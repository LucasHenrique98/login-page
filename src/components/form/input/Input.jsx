import React from 'react';
import './style.scss';

export default function Input({ ...rest }) {
  return <input className="form-input" {...rest} />;
}
