import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Componentes!
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from './../components/journal/JournalScreen';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route 
          path="/auth"
          component={ AuthRouter }
        />

        <Route 
          exac path="/"
          component={ JournalScreen }
        />
      </Switch>
    </Router>
  );
}
