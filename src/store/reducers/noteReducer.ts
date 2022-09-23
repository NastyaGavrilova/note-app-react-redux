
import { createReducer } from '@reduxjs/toolkit';
import * as actions from "../actions/actions";

const initialState = {
  notes: [
    {
      id: "1",
      name: "Shopping List",
      created: "April 20, 2021",
      category: "Task",
      content: "Tomatoes, bread",
      archived: false,
    },
    {
      id: "2",
      name: "The theory of evolution",
      created: "April 27, 2021",
      category: "Random Thought",
      content: "The evolution",
      archived: false,
    },
    {
      id: "3",
      name: "New Feature",
      created: "May 05, 2021",
      category: "Idea",
      content: "Implement new feature in project on the 15/09/2022",
      archived: false,
    },
    {
      id: "4",
      name: "William Gaddis",
      created: "May 07, 2021",
      category: "Quote",
      content: "Power doesn't co...",
      archived: false,
    },
    {
      id: "5",
      name: "Books",
      created: "May 15, 2021",
      category: "Task",
      content: "The Lean Startup",
      archived: true,
    }
  ],
  statiscticsList: [],
  modal: {
    name: '',
    category: '',
    content: '',
    isOpenEdit: false,
    isOpenCreate: false,
    id: '',
  },
  showArchived: false,

}

const noterReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(
      actions.addNote, (state, action) => {
        const newNote = action.payload
        return {
          ...state,
          notes: [...state.notes, newNote]
        }
      }
    )

    .addCase(
      actions.removeNote, (state, action) => {
        const newNotes = state.notes.filter((note: any) => note.id !== action.payload)
        return {
          ...state,
          notes: newNotes
        }
      }
    )
    .addCase(
      actions.closeModal, (state, action) => {
        const closedModal = { name: '', category: '', content: '', isOpenEdit: false, isOpenCreate: false, id: '' }
        return {
          ...state,
          modal: closedModal,
        }
      }
    )
    .addCase(
      actions.openModalEdit, (state, action) => {
        const newModal = {
          name: state.notes.filter(note => note.id === action.payload)[0].name,
          category: state.notes.filter(note => note.id == action.payload)[0].category,
          content: state.notes.filter(note => note.id === action.payload)[0].content,
          isOpenEdit: true,
          isOpenCreate: false,
          id: action.payload
        }
        return {
          ...state,
          modal: newModal,
        }
      }
    )
    .addCase(
      actions.openModalCreate, (state, action) => {
        const newModal = {
          name: state.notes.filter(note => note.id !== action.payload)[0].name,
          category: state.notes.filter(note => note.id !== action.payload)[0].category,
          content: state.notes.filter(note => note.id !== action.payload)[0].content,
          isOpenEdit: false,
          isOpenCreate: true,
          id: action.payload
        }
        return {
          ...state,
          modal: newModal,
        }
      }
    )
    .addCase(
      actions.edit, (state, action) => {
        const newNotes = state.notes.map((note) => {
          if (note.id == action.payload.id) {
            return { ...note, name: action.payload.name, category: action.payload.category, content: action.payload.content };
          }
          return note
        })
        return {
          ...state,
          notes: newNotes,
        }
      }
    )
    .addCase(
      actions.archive, (state, action) => {
        const newNotes = state.notes.map((note) => {
          if (note.id === action.payload) {
            console.log(state.notes)
            return { ...note, archived: true };
          }
          return note
        })
        return {
          ...state,
          notes: newNotes,
        }
      }
    )
    .addCase(
      actions.unarchive, (state, action) => {
        const newNotes = state.notes.map((note) => {
          if (note.id == action.payload) {
            return { ...note, archived: false };
          }
          return note
        })
        return {
          ...state,
          notes: newNotes,
        }
      }
    )
    .addCase(
      actions.toggleShowArchived, (state, action) => {
        return {
          ...state,
          showArchived: !state.showArchived
        }
      }
    )
    .addCase(
      actions.changeStatisticsList, (state, action) => {
        return {
          ...state,
          statiscticsList: action.payload
        }
      }
    )
)
export default noterReducer;