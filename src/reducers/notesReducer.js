import { types } from './../types/types';

/*
  {
    notes: [],
    active: null // Cuando no se ha seleccionado ninguna nota
    active: { // Nota seleccionada
      id: '',
      title: '',
      body: '',
      imgURL: '',
      date: 1321132123
    }
  }
*/

const initialState = {
  notes: [],
  active: null
};

export const notesReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case types.notesActive: 
      return {
        ...state,
        active: {
          ...payload
        }
      }

    case types.notesLoad: 
      return {
        ...state,
        notes: [...payload]
      }
    case types.notesUpdate: 
      
      return {
        ...state,
        notes: state.notes.map(
          note => note.id === payload.id
            ? payload.note
            : note
        )
      }
    default:
      return state;
  }
}