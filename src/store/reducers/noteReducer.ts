
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as actions from "../actions/actions";

// interface NoteState {
//   notes: INote[],
// }

const initialState = {
  notes: [
    {
      id: 1,
      name: "Shopping List",
      created: "April 20, 2021",
      category: "Task",
      content: "Tomatoes, bread",
      dates: "",
      archived: false,
    },
    {
      id: 2,
      name: "The theory of evolution",
      created: "April 27, 2021",
      category: "Random Thought",
      content: "The evolution",
      dates: "",
      archived: false,
    },
    {
      id: 3,
      name: "New Feature",
      created: "May 05, 2021",
      category: "Idea",
      content: "Implement new feature in project on the 15/09/2022",
      dates: "15/09/2022",
      archived: false,
    },
    {
      id: 4,
      name: "William Gaddis",
      created: "May 07, 2021",
      category: "Quote",
      content: "Power doesn't co...",
      dates: "",
      archived: false,
    },
    {
      id: 5,
      name: "Books",
      created: "May 15, 2021",
      category: "Task",
      content: "The Lean Startup",
      dates: "",
      archived: true,
    }
  ],

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
        const closedModal = { text: '', category: '', isOpen: false, id: '' }
        return {
          ...state,
          modal: closedModal,
        }
      }
    )
    // .addCase(
    //   actions.openModal, (state, action) => {
    //     const newModal = {
    //       text: state.notes.filter(note => note.id == action.payload)[0].text,
    //       category: state.notes.filter(note => note.id == action.payload)[0].category,
    //       isOpen: true,
    //       id: action.payload
    //     }
    //     return {
    //       ...state,
    //       modal: newModal,
    //     }
    //   }
    // )
    .addCase(
      actions.edit, (state, action) => {
        const newNotes = state.notes.map((note) => {
          if (note.id == action.payload.id) {
            return { ...note, text: action.payload.name, category: action.payload.category };
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
          if (note.id == action.payload) {
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
)
export default noterReducer;