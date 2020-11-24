import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from './../types/types';

export const setLogin = (email, pass) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(2312132, 'paaaaho'));
    }, 3000);
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

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
});
