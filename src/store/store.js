import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './../reducers/authReducer';
import { uiReducer } from './../reducers/uiReducer';
import { notesReducer } from './../reducers/notesReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Nos ayuda a utilizar mas un reducer en el store de redux
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: notesReducer,
});

// Creanos el store global de la aplicación
export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
