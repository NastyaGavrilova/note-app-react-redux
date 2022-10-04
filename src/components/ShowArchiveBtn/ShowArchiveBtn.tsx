import React, { FC, MouseEventHandler } from 'react';
import { AppDispatch } from '../../store/store';
import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';

export interface ColorProps {
  btnText: string
  showArchived: MouseEventHandler<HTMLButtonElement>
}
const ShowArchiveBtn: FC<ColorProps> = ({ showArchived, btnText }) => {
  return (
    <button className='max-w-[100px] w-full cursor pointer p-1 rounded border border-solid border-borderC bg-item text-base text-borderC duration-150 hover:bg-borderC hover:border-item hover:text-item' onClick={showArchived}>{btnText}</button>
  );
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    showArchived: () => dispatch(actions.toggleShowArchived()),
  }
}

export default connect(null, mapDispatchToProps)(ShowArchiveBtn);



