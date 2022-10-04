import React, { FC, useEffect } from 'react';
import { AppDispatch } from '../../../store/store';
import { State, SubmitNote } from '../../../store/types/types';
import * as actions from '../../../store/actions/actions';
import { connect } from 'react-redux';
import { StatListItem } from './StatListItem';
export interface Props {
  notes: SubmitNote[],
  onUpdate: (data: ListData) => void,
}
type ListData = { [key: string]: { active: number, archived: number } }[]
type Category = { [key: string]: { active: number, archived: number } }
const StatiscticsListItem: FC<Props> = ({ notes, onUpdate }) => {
  useEffect(() => {
    const data = getTableData()
    onUpdate(data)
  })

  const getTableData = () => {
    const allCategories = notes.map(note => {
      return note.category
    })

    const uniqueCategories = Array.from(new Set(allCategories))

    const filteredCategories = uniqueCategories.map(uniqueCategory => {
      const obj = {
        [uniqueCategory]: {
          active: notes.filter((note) => note.category === uniqueCategory && note.archived === false).length,
          archived: notes.filter((note) => note.category === uniqueCategory && note.archived === true).length
        }
      }
      return obj
    })
    return filteredCategories
  }
  const tableList = getTableData()
  const listMarkup = (tableData: ListData) => {
    const markup = tableData.map((category: Category, index: number) => {
      const key = Object.keys(category)
      const identifier = key[0]

      return (
        <StatListItem key={index} categoryName={key} counterActive={category[identifier].active} counterArchived={category[identifier].archived} />
      )
    })
    return markup
  }

  return (
    <>{tableList.length > 0 ? listMarkup(tableList) : <h3 className="mt-3" style={{ color: 'grey', fontSize: 18 + 'px' }} >No data</h3>}</>
  );
};
const mapStateToProps = (state: State) => {
  return {
    notes: state.notes,
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onUpdate: (data: ListData) => dispatch(actions.changeStatisticsList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatiscticsListItem);

