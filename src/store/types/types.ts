export type State = {
  notes: SubmitNote[],
  tableData: { [key: string]: { active: number, archived: number } }[],
  modal: ModalData,
  showArchived: boolean
}

export type ModalData = {
  name: string,
  category: string,
  isOpen: boolean,
  id: string,
}

export type Id = number | string;

export type SubmitNote = {
  id: number,
  name: string,
  created: string,
  category: string,
  content: string,
  dates: string,
  archived: boolean,
}

export type SubmitEdit = {
  name: string;
  category: string;
  id: Id;
}