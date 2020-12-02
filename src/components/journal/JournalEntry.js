import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ entry }) => {
  const { id, title, body, date, url  } = entry;
  const day = moment(date);
  
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(
      activeNote(id, {
        title,
        body,
        imgURL: url,
        date
      })
    );
  }

  return (
    <div 
      className="journal__entry pointer"
      onClick={ handleEntryClick }
    >
      {
        url && 
        (<div 
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`
          }}  
        ></div>)
      }

      <div className="journal__entry-body">
        <p className="journal__entry-title"> { title } </p>
        <p className="journal__entry-content"> 
          { body }
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span> { day.format('dddd') } </span>
        <h4>{ day.format('Do')} </h4>
      </div>
    </div>
  );
}

