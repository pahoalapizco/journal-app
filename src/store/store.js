import { createStore, combineReducers } from 'redux';
import { authReducer } from './../reducers/authReducer';

// Nos ayuda a utilizar mas un reducer en el store de redux
const reducers = combineReducers({
  auth: authReducer
});

// Creanos el store global de la aplicación
export const store = createStore(reducers);
