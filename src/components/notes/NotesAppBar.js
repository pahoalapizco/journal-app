import React from 'react';

export const NotesAppBar = ({ date }) => {
  return (
    <div className="notes__appbar">
      <span> { date } </span>
      <div>
        <button className="btn btn-primary">
          Picture
        </button>
        <button className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}
