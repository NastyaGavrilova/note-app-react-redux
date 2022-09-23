import { FC, MouseEventHandler } from 'react';
import { connect } from 'react-redux'
import { AppDispatch } from '../../store/store';
import { ModalData, State, SubmitNote, SubmitEdit } from '../../store/types/types';
import * as actions from '../../store/actions/actions';
import NoteItem from '../NoteItem/NoteItem';
import Header from '../Header/Header';
import "./_noteContainer.scss";
import ShowArchiveBtn from "../ShowArchiveBtn/ShowArchiveBtn";
import Modal from "../Modal/Modal";


interface Props {
  notes: SubmitNote[],
  showArchived: boolean,
  archiveNote: (id: string) => void,
  unarchiveNote: (id: string) => void,
  removeNote: (id: string) => void,
  openModalEdit: (id: string) => void,
  openModalCreate: (id: string) => void,
  modalData: ModalData,
  closeModal: () => void,
  submitEdit: (cred: SubmitEdit) => void,
}

const NoteContainer: FC<Props> = ({ notes, showArchived, archiveNote, unarchiveNote, removeNote, openModalEdit, modalData, openModalCreate }) => {

  const handleArchiveNote: MouseEventHandler<HTMLButtonElement> = (e) => {
    archiveNote((e.target! as HTMLButtonElement).id)
  }
  const handleUnarchiveNote: MouseEventHandler<HTMLButtonElement> = (e) => {
    unarchiveNote((e.target! as HTMLButtonElement).id)
  }
  const handleRemoveNote: MouseEventHandler<HTMLButtonElement> = (e) => {
    removeNote((e.target! as HTMLButtonElement).id)
  }
  const handleOpenModal: MouseEventHandler<HTMLButtonElement> = (e) => {
    openModalEdit((e.target! as HTMLButtonElement).id)
  }
  const handleOpenCreateNoteModal: MouseEventHandler<HTMLButtonElement> = (e) => {
    openModalCreate((e.target! as HTMLButtonElement).id)
  }

  const headerItems = ['Name', 'Created', 'Category', "Content", 'Dates'];
  const allActive = notes.filter(note => note.archived === false)
  const allArchive = notes.filter(note => note.archived === true)
  const dates = allActive.map(note => {
    const dateType = /(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}/g;

    const isMatch = [...note.content.matchAll(dateType)]
    const foundDates = isMatch.map(match => {
      return match[0]
    })

    let dates = '';

    if (foundDates.length > 0) {
      foundDates.forEach(date => {
        dates += date + ' | '
      })
    }

    return dates
  })
  return (

    <>
      <div>{modalData.isOpenEdit && <Modal />}</div>
      <div>{modalData.isOpenCreate && <Modal />}</div>
      <div className='notes'>
        <div className='notes__wrapper'>
          <Header
            listItem={headerItems.map((l, index) => (
              <li className='header__list-item' key={`header__list-item-${index}`}>{l}</li>
            ))}
            btns={
              <div className='header__icon-item'>
                <ShowArchiveBtn btnText={showArchived ? "Unarchived" : "Archived"} />
              </div>
            }
            isStatisticsHeader={false}
          />
          <ul className='notes__list'>
            {showArchived ? allArchive.map((note, i) => (
              <NoteItem note={note} key={`archive-${note.id}`} click={handleUnarchiveNote} archiveBtnName='Unarchive' clickDelete={handleRemoveNote} disabledBtn={showArchived} clickEdit={handleOpenModal} dates={dates} index={i} />
            )) : allActive.map((note, i) => (
              <NoteItem note={note} key={note.id} click={handleArchiveNote} archiveBtnName='Archive' clickDelete={handleRemoveNote} clickEdit={handleOpenModal} disabledBtn={showArchived} dates={dates} index={i} />
            ))}

          </ul>
          <div className='notes__show-modal'>
            <button className='notes__btn-show' id="openCreateNoteBtn" onClick={handleOpenCreateNoteModal}>Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: State) => {
  return {
    notes: state.notes,
    showArchived: state.showArchived,
    modalData: state.modal,
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    removeNote: (id: string) => dispatch(actions.removeNote(id)),
    archiveNote: (id: string) => dispatch(actions.archive(id)),
    unarchiveNote: (id: string) => dispatch(actions.unarchive(id)),
    openModalEdit: (id: string) => dispatch(actions.openModalEdit(id)),
    openModalCreate: (id: string) => dispatch(actions.openModalCreate(id)),
    closeModal: () => dispatch(actions.closeModal()),
    submitEdit: (editObj: SubmitEdit) => dispatch(actions.edit(editObj)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
