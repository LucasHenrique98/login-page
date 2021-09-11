import React from 'react';
import LoginButton from './logInButton/LoginButton.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './style.scss';

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchema) });

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form-container">
      <h1>Hey, welcome!</h1>

      <label className="input-container" htmlFor="email">
        <p className="label-title">E-mail</p>
        <input
          className="form-input"
          {...register('email')}
          type="email"
          name="email"
          placeholder="Insira seu e-mail"
        />
      </label>
      {errors.email && <p className="input-error-message">{errors.email.message}</p>}

      <label className="input-container" htmlFor="password">
        <p className="label-title">Password</p>
        <input
          className="form-input"
          {...register('password')}
          type="password"
          name="password"
          placeholder="Insira sua senha"
        />
      </label>
      {errors.password && <p className="input-error-message">{errors.password.message}</p>}

      <LoginButton />
    </form>
  );
}
