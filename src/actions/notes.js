import { db } from '../firebase/firebaseConfig';
import { types } from './../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    
    const docref = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch( activeNote(docref.id, newNote) );
  }
}

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note
  }
})