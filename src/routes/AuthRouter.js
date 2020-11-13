import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Componentes!
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route 
          path="/auth/login"
          component={ LoginScreen }
        />
        <Route 
          path="/auth/register"
          component={ RegisterScreen }
        />
        <Redirect to="/auth/login"/>
      </Switch>
    </>
  );
}
