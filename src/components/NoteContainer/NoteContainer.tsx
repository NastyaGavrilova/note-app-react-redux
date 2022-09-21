import React, { FC, MouseEventHandler } from 'react';
import { connect } from 'react-redux'
import { AppDispatch } from '../../store/store';
import { State, SubmitNote } from '../../store/types/types';
import * as actions from '../../store/actions/actions';
import NoteItem from '../NoteItem/NoteItem';
import Header from '../Header/Header';
import "./_noteContainer.scss";
import ArchiveHeaderIcon from "../Icons/HeaderIcons/ArchiveHeaderIcon";
import DeleteHeaderIcon from '../Icons/HeaderIcons/DeleteHeaderIcon';

interface Props {
  notes: SubmitNote[],
  showArchived: boolean,
  archiveNote: (id: string) => void,
  unarchiveNote: (id: string) => void,
  removeNote: (id: string) => void,
}

const NoteContainer: FC<Props> = ({ notes, showArchived, archiveNote, unarchiveNote, removeNote }) => {

  const handleArchiveNote: MouseEventHandler<HTMLButtonElement> = (e) => {
    archiveNote((e.target! as HTMLButtonElement).id)
  }
  const handleUnarchiveNote: MouseEventHandler<HTMLButtonElement> = (e) => {
    unarchiveNote((e.target! as HTMLButtonElement).id)
  }
  const handleRemoveNote: MouseEventHandler<HTMLButtonElement> = (e) => {
    removeNote((e.target! as HTMLButtonElement).id)
  }

  const headerItems = ['Name', 'Created', 'Category', "Content", 'Dates'];
  const icons = [<ArchiveHeaderIcon color='white' />, <DeleteHeaderIcon color='white' />]
  const allActive = notes.filter(note => note.archived === false)
  const allArchive = notes.filter(note => note.archived === true)
  return (
    <div className='notes'>
      <div className='notes__wrapper'>
        <Header
          listItem={headerItems.map((l, index) => (
            <li className='header__list-item' key={`header__list-item-${index}`}>{l}</li>
          ))}
          btns={icons.map((icon, i) => (
            <div className='header__icon-item' key={`header__icon-item-${i}`}>{icon}</div>
          ))}
        />
        <ul className='notes__list'>
          {showArchived ? allArchive.map((note) => (
            <NoteItem note={note} key={`archive-${note.id}`} click={handleUnarchiveNote} archiveBtnName='Unarchive' clickDelete={handleRemoveNote} className="hidden" classNameEdit='hidden' />
          )) : allActive.map((note) => (
            <NoteItem note={note} key={note.id} click={handleArchiveNote} archiveBtnName='Archive' clickDelete={handleRemoveNote} className='note__delete' classNameEdit='note__edit' />
          ))}

        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    notes: state.notes,
    showArchived: state.showArchived
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    removeNote: (id: string) => dispatch(actions.removeNote(id)),
    archiveNote: (id: string) => dispatch(actions.archive(id)),
    unarchiveNote: (id: string) => dispatch(actions.unarchive(id)),
    // openModal: (id: string) => dispatch(actions.openModal(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
