import React, { FC, MouseEventHandler } from 'react';
import { SubmitNote } from '../../store/types/types';
// import "./_noteItem.scss";
export interface NoteItemProps {
  note: SubmitNote,
  click: MouseEventHandler<HTMLButtonElement>,
  clickDelete: MouseEventHandler<HTMLButtonElement>,
  clickEdit: MouseEventHandler<HTMLButtonElement>

  // archiveBtnName: string
  dates: string[],
  index: number,
  disabledBtn: boolean,
}
const NoteItem: FC<NoteItemProps> = ({ note, click, clickDelete, clickEdit, disabledBtn, dates, index }) => {

  return (
    <li className='bg-item mb-4 p-4 rounded flex justify-between items-center' >
      <div className='max-w-[900px] w-full flex justify-between'>
        <p className='max-w-[110px] w-full text-base truncate font-normal'>{note.name}</p>
        <p className='max-w-[110px] w-full text-base truncate font-normal'>{note.created}</p>
        <p className='max-w-[110px] w-full text-base truncate font-normal'>{note.category}</p>
        <p className='max-w-[110px] w-full text-base truncate font-normal'>{note.content}</p>
        {dates[index].length > 0 ? <p className='max-w-[110px] w-full text-base truncate font-normal'>{dates[index]}</p> : <p className='max-w-[110px] w-full text-base truncate font-normal'></p>}

      </div>
      <div className={disabledBtn === true ? 'max-w-[100px] w-full flex justify-between items-center' : "max-w-[240px] w-full flex justify-between items-center"}>
        {disabledBtn === true ? <button className='max-w-[100px] w-full cursor pointer p-1 rounded border border-solid border-borderC bg-item text-base text-borderC duration-150 hover:bg-borderC hover:border-item hover:text-item' id={note.id} onClick={click}>Unarchive</button> : <><button className="max-w-[100px] w-full cursor pointer p-1 rounded border border-solid border-borderC bg-item text-base text-borderC duration-150 hover:bg-borderC hover:border-item hover:text-item" id={note.id} onClick={clickEdit}>Edit</button>
          <button className='max-w-[100px] w-full cursor pointer p-1 rounded border border-solid border-borderC bg-item text-base text-borderC duration-150 hover:bg-borderC hover:border-item hover:text-item' id={note.id} onClick={click}>Archive</button>
          <button className="max-w-[100px] w-full cursor pointer p-1 rounded border border-solid border-borderC bg-item text-base text-borderC duration-150 hover:bg-borderC hover:border-item hover:text-item" id={note.id} onClick={clickDelete} >Delete</button></>}
      </div>
    </li>
  );
};

export default NoteItem;
