import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753)'
        }}  
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title"> Titulo </p>
        <p className="journal__entry-content"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span> Monday </span>
        <h4>28</h4>
      </div>
    </div>
  );
}

