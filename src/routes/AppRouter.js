import React from 'react';
import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

// Componentes!
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';

export const AppRouter = () => {
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
