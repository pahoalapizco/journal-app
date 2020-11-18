import React from 'react';

export const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span> 17 de Noviembre de 2020 </span>
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
