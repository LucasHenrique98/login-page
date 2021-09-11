import React from 'react';
import Input from './input/Input.jsx';
import LoginButton from './logInButton/LoginButton.jsx';
import './style.scss';

export default function Form() {
  return (
    <form className="form-container">
      <h1>Hey, welcome!</h1>

      <label className="input-container" htmlFor="email">
        <p className="label-title">E-mail</p>
        <Input type="email" name="email" placeholder="Insira seu e-mail" />
      </label>

      <label className="input-container" htmlFor="password">
        <p className="label-title">Password</p>
        <Input type="password" name="password" placeholder="Insira sua senha" />
      </label>

      <LoginButton />
    </form>
  );
}
