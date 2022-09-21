import React, { FC } from 'react';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { State, SubmitNote } from '../../store/types/types';
import * as actions from '../../store/actions/actions';
import NoteItem from '../NoteItem/NoteItem';
import Header from '../Header/Header';
import "./_noteContainer.scss";
import { ArchiveIcon, DeleteIcon } from "../Icons/Icons";

interface Props {
  notes: SubmitNote[],

}

const NoteContainer: FC<Props> = ({ notes }) => {
  const headerItems = ['Name', 'Created', 'Category', "Content", 'Dates'];
  const icons = [<ArchiveIcon />, <DeleteIcon />]
  return (
    <div className='notes'>
      <div className='notes__wrapper'>
        <Header
          listItem={headerItems.map((l, index) => (
            <li className='header__list-item' key={`header__list-item-${index}`}>{l}</li>
          ))}
          btns={icons.map((icon, i) => (<div className='header__icon-item' key={`header__icon-item-${i}`}>{icon}</div>))}
        />
        <ul className='notes__list'>
          {notes.map((note, index) => (
            <NoteItem note={note} key={note.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    notes: state.notes,
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    removeNote: (id: string) => dispatch(actions.removeNote(id)),
    archiveNote: (id: string) => dispatch(actions.archive(id)),
    openModal: (id: string) => dispatch(actions.openModal(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
