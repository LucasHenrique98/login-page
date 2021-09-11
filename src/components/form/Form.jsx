import React from 'react';
import Input from '../input/Input.jsx';
import './style.scss';

export default function Form() {
  return (
    <div className="form-container">
      <h1>Hey, welcome!</h1>

      <label className="input-container" htmlFor="email">
        <p>E-mail</p>
        <Input inputType="email" inputName="email" placeholder="Insira seu e-mail" />
      </label>

      <label className="input-container" htmlFor="password">
        <p>Password</p>
        <Input inputType="email" inputName="email" />
      </label>
    </div>
  );
}
