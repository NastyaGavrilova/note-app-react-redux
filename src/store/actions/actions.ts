import { createAction } from '@reduxjs/toolkit';
import { Id, SubmitEdit, SubmitNote } from '../types/types';

export const addNote = createAction<SubmitNote>('note/ADD')
export const removeNote = createAction<Id>('note/REMOVE')


export const edit = createAction<SubmitEdit>('note/EDIT')
export const closeModal = createAction<void>('modal/CLOSE_MODAL')
export const openModalEdit = createAction<any>('modal/OPEN_MODAL_EDIT')
export const openModalCreate = createAction<any>('modal/OPEN_MODAL_CREATE')


export const archive = createAction<Id>('note/ARCHIVE')
export const unarchive = createAction<Id>('note/UNARCHIVE')


export const toggleShowArchived = createAction<void>('page/TOGGLE_SHOW_ARCHIVED')


export const changeStatisticsList = createAction<any>('list/CHANGE_STATISTICS_LIST')