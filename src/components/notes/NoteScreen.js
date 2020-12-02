import React, { useEffect, useRef } from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useForm } from './../../hooks/useForm';
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector(state => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { title, body, imgURL, date } = formValues;

  const activeId = useRef(  note.id );
  const day = moment(date).format('MMMM Do YYYY');
  
  useEffect(() => {
    if(activeId.current !== note.id){
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch( activeNote(formValues.id, { ...formValues }) );
  }, [formValues, dispatch]);
  
  return (
    <div  className="notes__main-content">
      <NotesAppBar 
        date={ day }
      />

      <div className="notes__content">
        <input 
          type="text"
          placeholder="Title"
          name="title"
          className="notes__title-input"
          autoComplete="off"
          value={ title }
          onChange={ handleInputChange }       
        />

        <textarea
          placeholder="Write something you want :)"
          name="body"
          className="notes__textarea"
          value={ body }
          onChange={ handleInputChange }
        >         
        </textarea>
        <div className="notes__image">
          {
            imgURL &&
            <img 
              src={`${imgURL}`}
              alt="example"
            />
          }
        </div>
      </div>
    </div>
  );
}
