import React from 'react';
import Sidebar from './Sidebar';

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      
      <Sidebar />

      <main>
        <h2> Main Content </h2>
      </main>
    </div>
  );
}
