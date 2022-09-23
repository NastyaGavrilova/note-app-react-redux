import React, { FC, MouseEventHandler } from 'react';
import { SubmitNote } from '../../store/types/types';
import "./_noteItem.scss";
interface NoteItemProps {
  note: SubmitNote,
  click: MouseEventHandler<HTMLButtonElement>,
  clickDelete: MouseEventHandler<HTMLButtonElement>,
  clickEdit: MouseEventHandler<HTMLButtonElement>

  archiveBtnName: string
  dates: string[],
  index: number,
  disabledBtn: boolean,
}
const NoteItem: FC<NoteItemProps> = ({ note, click, archiveBtnName, clickDelete, clickEdit, disabledBtn, dates, index }) => {

  return (
    <li className='note' >
      <div className='note__wrapper'>
        <p className='note__name note__field'>{note.name}</p>
        <p className='note__created note__field'>{note.created}</p>
        <p className='note__category note__field'>{note.category}</p>
        <p className='note__content note__field'>{note.content}</p>
        {dates[index].length > 0 ? <p className='note__dates note__field'>{dates[index]}</p> : <p className='note__dates note__field'></p>}

      </div>
      <div className={disabledBtn === true ? 'note__btns-unarchived' : "note__btns"}>
        {disabledBtn === true ? <button className='note__archive' id={note.id} onClick={click}>{archiveBtnName}</button> : <><button className="note__edit" id={note.id} onClick={clickEdit}>Edit</button>
          <button className='note__archive' id={note.id} onClick={click}>{archiveBtnName}</button>
          <button className="note__delete" id={note.id} onClick={clickDelete} >Delete</button></>}

      </div>
    </li>
  );
};

export default NoteItem;
