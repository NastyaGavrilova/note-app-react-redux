export type State = {
  notes: SubmitNote[],
  statisticsList: { [key: string]: { active: number, archived: number } }[],
  modal: ModalData,
  showArchived: boolean
}

export type ModalData = {
  name: string,
  content: string,
  category: string,
  isOpenEdit: boolean,
  isOpenCreate: boolean,
  id: string,
}

export type Id = number | string;

export type SubmitNote = {
  id: string,
  name: string,
  created: string,
  category: string,
  content: string,
  archived: boolean,
}

export type SubmitEdit = {
  name: string;
  category: string;
  content: string,
  id: Id;
}