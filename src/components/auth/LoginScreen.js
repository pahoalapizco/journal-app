import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Hooks
import { useForm } from '../../hooks/useForm';
import { login, setLogin } from './../../actions/auth';

export const LoginScreen = () => {
  const [values, handleInputChange ] = useForm({
    name: 'paho@paho.com',
    password: '123456'
  });

  const dispatch = useDispatch();
  
  const { name, password } = values;

  const handleLogin = e => {
    e.preventDefault();
    dispatch( setLogin(name, password) );
  }

  return (
    <>
      <h3 className="auth__title mb-5"> 
        Login 
      </h3>
      
      <form onSubmit={handleLogin}>
        <input 
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
          value={ name }
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

        <button
          type="submit"
          className="btn btn-primary btn-block"
        > 
          Login
        </button>

        <div className="auth__social-networks">
          <p> Login with social networks </p>
          <div className="google-btn">
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
          </div>
        </div>
        <Link 
          to="/auth/register"
          className="link"
        >
          Create account
        </Link>
      </form>
    </>
  );
}
