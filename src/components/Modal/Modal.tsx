import { FC, ChangeEvent, useState, FormEvent } from 'react';
import { AppDispatch } from '../../store/store';
import { ModalData, State, SubmitEdit, SubmitNote } from '../../store/types/types';
import * as actions from '../../store/actions/actions';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Angeler.css';
// import "./_modal.scss";

interface Props {
  modalData: ModalData,
  closeModal: () => void,
  submitEdit: (cred: SubmitEdit) => void,
  onSubmit: (noteObj: SubmitNote) => void,

}
const Modal: FC<Props> = ({ modalData, closeModal, submitEdit, onSubmit }) => {
  const [name, setName] = useState(modalData.name);
  const [createNoteName, setCreateNoteName] = useState('');
  const [content, setContent] = useState(modalData.content);
  const [createNoteContent, setCreateNoteContent] = useState('')
  const [category, setCategory] = useState(modalData.category);
  const [createNoteCategory, setCreateNoteCategory] = useState('null')
  const [noteId, setNoteID] = useState(modalData.id);
  // for creating note
  const handleNoteCreateName = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateNoteName(e.target.value)
  }
  const handleNoteCreateContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCreateNoteContent(e.target.value);
  }

  const handleNoteCreateCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCreateNoteCategory(e.target.value)
  }
  const handleSubmitCreate = () => {
    let now = new Date();
    let month = now.getMonth();
    let day = now.getDate();
    let year = now.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dateTime = `${monthNames[month]} ${day}, ${year}`


    if (createNoteName === '') {
      alert({ text: 'Please write something in your note', type: 'notice', delay: 2500, styling: 'angeler', icons: 'angeler' })
      return
    } else if (createNoteCategory === 'null') {
      alert({ text: 'PLease select a category', type: 'notice', delay: 2000, styling: 'angeler', icons: 'angeler' })
      return
    }

    const id: string = uuid()

    const obj: SubmitNote = { name: createNoteName, category: createNoteCategory, content: createNoteContent, id: id, created: dateTime, archived: false }

    onSubmit(obj)
    setCreateNoteCategory('null')
    setCreateNoteContent('')
    setCreateNoteName('')

    closeModal()


  }

  // for editing note
  const handleNoteName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleNoteCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }
  const handleNoteContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }
  const handleSubmitEdit = (e: FormEvent) => {
    if (name === '') {
      alert({ text: 'Please write something in your note', type: 'notice', delay: 2500, styling: 'angeler', icons: 'angeler' })
      return
    } else if (category === 'null') {
      alert({ text: 'PLease select a category', type: 'notice', delay: 2000, styling: 'angeler', icons: 'angeler' })
      return
    }


    const editObj = { name: name, category: category, content: content, id: (e.target as HTMLButtonElement).id }

    submitEdit(editObj)

    setCategory('')
    setContent('')
    setName('')
    setNoteID('')

    closeModal()
  }
  return (
    <div className='modal' tabIndex={-1} id="modal">

      <form className='modal__form'>
        <input className='modal__input-name' type={"text"} placeholder="Note Name" value={modalData.isOpenEdit === true ? name : createNoteName} onChange={modalData.isOpenEdit === true ? handleNoteName : handleNoteCreateName}></input>
        <p className='modal__select-category'>Select Category:</p>
        <select className='modal__select' value={modalData.isOpenEdit === true ? category : createNoteCategory} onChange={modalData.isOpenEdit === true ? handleNoteCategory : handleNoteCreateCategory}>
          <option value={"Task"}>Pick Category</option>
          <option value={"Task"}>Task</option>
          <option value={"Idea"}>Idea</option>
          <option value={"Quote"}>Quote</option>
          <option value={"Random Thought"}>Random thought</option>
        </select>
        <textarea className='modal__content' placeholder='Content of your note' value={modalData.isOpenEdit === true ? content : createNoteContent} onChange={modalData.isOpenEdit === true ? handleNoteContent : handleNoteCreateContent}></textarea>
        <div className='modal__footer'>
          <button type="button" className="modal__btn-close" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
          <button id={noteId} onClick={modalData.isOpenEdit === true ? handleSubmitEdit : handleSubmitCreate} type="button" className="modal__button-save">{modalData.isOpenEdit === true ? "Edit" : "Add"}</button>
        </div>
      </form>



    </div>
  );
};
const mapStateToProps = (state: State) => {
  return {
    modalData: state.modal,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    closeModal: () => dispatch(actions.closeModal()),
    submitEdit: (editObj: SubmitEdit) => dispatch(actions.edit(editObj)),
    onSubmit: (noteObj: SubmitNote) => dispatch(actions.addNote(noteObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
