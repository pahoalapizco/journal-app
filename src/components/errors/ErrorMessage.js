import React from 'react';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="auth__alert-error"> 
      { message }
    </div>
  );
}
