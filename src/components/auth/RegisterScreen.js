import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const [errorValue, setError] = useState(false);

  const [formValues, handleInputChange ] = useForm({
    name: 'Paho Alapizco',
    email: 'paho@paho.com',
    password: '123456',
    confirmPassword: '123456'
  });

  const { 
    name, 
    email,
    password,
    confirmPassword
  } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (isFormValid()) {
      setError(false);
      console.log('Fomulario corecto!');
    } else {
      setError(true);
    }
  }

  const isFormValid = () => {
    if(name.trim().length === 0) {
      console.log('Name is required');
      return false;
    }
    if(!validator.isEmail(email)) {
      console.log('Email is not valid');
      return false;
    }
    if(password !== confirmPassword || password.length < 6) {
      console.log('Password should match an be at leat 6 characteres');
      return false;
    }
    return true;
  }

  return (
    <>
      <h3 className="auth__title mb-5"> 
        Register 
      </h3>
      {
        errorValue && (
          <div className="auth__alert-error"> 
            Hola Error :( 
          </div>
        )
      }
      
      <form onSubmit={ handleRegister }>
        <input 
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
          value={ name }
          onChange={ handleInputChange }
        />
        <input 
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
          value={ email }
          onChange={ handleInputChange }
        />
        <input 
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={ password }
          onChange={ handleInputChange }
        />
        <input 
          type="password"
          placeholder="Confirm"
          name="confirmPassword"
          className="auth__input"
          value={ confirmPassword }
          onChange={ handleInputChange }
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        > 
          Register
        </button>

        <Link 
          to="/auth/login"
          className="link"
        >
          Already registered?
        </Link>
      </form>
    </>
  );
}
