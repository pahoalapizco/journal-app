import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div  className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input 
          type="text"
          placeholder="Title"
          className="notes__title-input"
          autoComplete="off"          
        />

        <textarea
          placeholder="Write something you want :)"
          className="notes__textarea"
        >         
        </textarea>
        <div className="notes__image">
          <img 
            src="https://i.pinimg.com/originals/7b/f9/d5/7bf9d59941b52934e6b9e5a9a3ddd839.jpg"
            alt="example"
          />
        </div>
      </div>
    </div>
  );
}
