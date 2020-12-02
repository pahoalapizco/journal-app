import Swal from 'sweetalert2';
import { db } from '../firebase/firebaseConfig';
import { types } from './../types/types';
import { loadNotes } from './../helpers/loadNotes';

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

export const startLoadingNotes = uid => {
  return async dispatch => {
    const notes = await loadNotes(uid);
    dispatch( setNotes(notes) );
  }
}

export const setNotes = notes => ({
  type: types.notesLoad,
  payload: notes
})

export const startSaveNote = note => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    
    if(!note.imgURL){
      delete note.imgURL;
    }

    const noteToFS = { ...note };
    delete noteToFS.id;

   await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFS);
   
    dispatch(refreshNote(note.id, noteToFS));
    Swal.fire({
      title: 'Saved',
      text: 'Note saved!',
      icon: 'success',
      confirmButtonText: 'Ok!'
    });
  }
}

export const refreshNote = (id, note) => ({
  type: types.notesUpdate,
  payload: { 
    id, 
    note: {
      id, 
      ...note
    }
  }    
})