import NewNote, { links as newNoteLinks } from 'components/NewNote/NewNote';
import React from 'react';

const NotesPage = () => {
  return (
    <main>
      <NewNote />
      <h1>test</h1>
    </main>
  );
};

export default NotesPage;

export const links = () => [...newNoteLinks()];
