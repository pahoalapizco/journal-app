import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { ErrorMessage } from '../errors/ErrorMessage';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  
  // Obtenemos el state de Redux!
  const { msgError } = useSelector( state => state.ui );
  
  const [formValues, handleInputChange ] = useForm({
    name: 'Paho Alapizco',
    email: 'paho@paho.com',
    password: '123456',
    confirmPassword: '123456x'
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
      console.log('Fomulario corecto!');
    }
  }

  const isFormValid = () => {
    if(name.trim().length === 0) {
      dispatch( setError ('Name is required') );
      return false;
    }
    if(!validator.isEmail(email)) {
      dispatch( setError('Email is not valid') );
      return false;
    }
    if(password !== confirmPassword || password.length < 6) {
      dispatch( setError('Password should match an be at leat 6 characteres') );
      return false;
    }

    dispatch( removeError() );
    return true;
  }

  return (
    <>
      <h3 className="auth__title mb-5"> 
        Register 
      </h3>

      {
        msgError && (<ErrorMessage message={ msgError } />)
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
