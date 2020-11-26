import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from './../types/types';

export const setLogin = (email, pass) => {
  return dispatch => {
    firebase.auth()
      .signInWithEmailAndPassword(email, pass)
      .then(({ user }) => {
        dispatch( login(user.uid, user.displayName) );
      })
      .catch(error => console.log(error));
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
