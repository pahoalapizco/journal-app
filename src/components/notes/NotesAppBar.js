import React from 'react';
import { startSaveNote } from './../../actions/notes';
import { useDispatch, useSelector } from 'react-redux';

export const NotesAppBar = ({ date }) => {
  const dispatch = useDispatch();
  const { active } = useSelector(state => state.notes);

  const handleSave = () => {
    // console.log( active )
    dispatch(startSaveNote( active ));
  }

  return (
    <div className="notes__appbar">
      <span> { date } </span>
      <div>
        <button className="btn btn-primary">
          Picture
        </button>
        <button 
          className="btn btn-primary"
          onClick={ handleSave }
        >
          Save
        </button>
      </div>
    </div>
  );
}
