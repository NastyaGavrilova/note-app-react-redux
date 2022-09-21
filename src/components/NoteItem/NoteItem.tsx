import React, { FC } from 'react';
import { SubmitNote } from '../../store/types/types';

interface NoteItemProps {
  note: SubmitNote,
}
const NoteItem: FC<NoteItemProps> = ({ note }) => {
  return (
    <li className='note'>
      <div className='note__wrapper'>
        <p className='note__name note__field'>{note.name}</p>
        <p className='note__created note__field'>{note.created}</p>
        <p className='note__category note__field'>{note.category}</p>
        <p className='note__content note__field'>{note.content}</p>
        <p className='note__dates note__field'>{note.dates}</p>
      </div>
    </li>
  );
};

export default NoteItem;