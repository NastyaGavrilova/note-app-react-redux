import React, { FC, MouseEventHandler } from 'react';
import { SubmitNote } from '../../store/types/types';
import "./_noteItem.scss";
interface NoteItemProps {
  note: SubmitNote,
  click: MouseEventHandler<HTMLButtonElement>,
  clickDelete: MouseEventHandler<HTMLButtonElement>,
  className: string,
  classNameEdit: string,
  archiveBtnName: string
}
const NoteItem: FC<NoteItemProps> = ({ note, click, archiveBtnName, clickDelete, className, classNameEdit }) => {

  return (
    <li className='note' >
      <div className='note__wrapper'>
        <p className='note__name note__field'>{note.name}</p>
        <p className='note__created note__field'>{note.created}</p>
        <p className='note__category note__field'>{note.category}</p>
        <p className='note__content note__field'>{note.content}</p>
        <p className='note__dates note__field'>{note.dates}</p>
      </div>
      <div className='note__btns'>
        <button className={classNameEdit}>Edit</button>
        <button className='note__archive' id={note.id} onClick={click}>{archiveBtnName}</button>
        <button className={className} id={note.id} onClick={clickDelete} >Delete</button>
      </div>
    </li>
  );
};

export default NoteItem;
