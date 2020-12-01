import React from 'react';
import moment from 'moment';

export const JournalEntry = ({ entry }) => {
  const { title, body, date, url  } = entry;
  const day = moment(date);

  return (
    <div className="journal__entry pointer">
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
        <h4>{ day.format('do')} </h4>
      </div>
    </div>
  );
}

