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
    default:
      return state;
  }
}