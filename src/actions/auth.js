import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from './../types/types';
import { uiStartLoading, uiFinishLoading } from './ui';

export const setLogin = (email, pass) => {
  return dispatch => {
    dispatch( uiStartLoading() ); // Marca el loading en true

    firebase.auth()
      .signInWithEmailAndPassword(email, pass)
      .then(({ user }) => {
        dispatch( login(user.uid, user.displayName) );

        setTimeout(() => {
          dispatch( uiFinishLoading() ); // Marca el loading en false
        }, 1500);
        
      })
      .catch(error => {
        console.log(error)
        dispatch( uiFinishLoading() ); // Marca el loading en false
      });
    }
}

export const startGoogleLogin = () => {
  return dispatch => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch( login(user.uid, user.displayName) );
      });
  }
}

export const startRegisterWithEmailPassName = ( email, pass, name) => {
  return dispatch => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch(error => console.log(error));
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
});

export const startLogout = () => {
  return async dispatch => {
    await firebase.auth().signOut();

    dispatch( logout() );
  }
}

export const logout = () => ({
  type: types.logout
});