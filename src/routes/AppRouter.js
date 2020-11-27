import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Componentes!
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';

export const AppRouter = () => {
  const [ checking, setChecking ] = useState(true);
  const [ logged, setLogged ] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    firebase.auth()
      .onAuthStateChanged( user => {
        if( user?.uid ) {
          dispatch( login(user.uid, user.displayName) );
          setLogged(true);
        } else {
          setLogged(false);
        }
        setChecking(false);
      });
  }, [dispatch, setChecking]);

  if (checking) {
    return (
      <h1>
        Loading...
      </h1>
    )
  }
  return (
    <Router>
      <div>
        <Switch>
          <Route 
            path="/auth"
            component={ AuthRouter }
          />

          <Route 
            exac path="/"
            component={ JournalScreen }
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}
