import React, { FC, MouseEventHandler } from 'react';
import { AppDispatch } from '../../store/store';
import * as actions from '../../store/actions/actions';
import { connect } from 'react-redux';
import "./_showArchived.scss";

interface ColorProps {
  btnText: string
  showArchived: MouseEventHandler<HTMLButtonElement>
}
const ShowArchiveBtn: FC<ColorProps> = ({ showArchived, btnText }) => {
  return (
    <button className='header__show-archive' onClick={showArchived}>{btnText}</button>

  );
};
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    showArchived: () => dispatch(actions.toggleShowArchived()),
  }
}

export default connect(null, mapDispatchToProps)(ShowArchiveBtn);



