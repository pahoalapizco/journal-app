import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-5"> 
        Register 
      </h3>
      
      <form>
        <input 
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
        />
        <input 
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
        />
        <input 
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
        <input 
          type="password"
          placeholder="Confirm"
          name="confirmPassword"
          className="auth__input"
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
