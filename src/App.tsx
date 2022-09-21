import React, { FC } from 'react';
import { connect, useSelector } from 'react-redux';
import NoteContainer from './components/NoteContainer/NoteContainer';
import { State } from './store/types/types';

// interface AppProps {
//   showArchived: boolean
// }
const App = () => {


  return (
    <div className="App">

      <NoteContainer />
    </div>
  );
}
export default App;
// const mapStateToProps = (state: State) => {
//   return {
//     // modalData: state.modal,
//     showArchived: state.showArchived
//   }
// }

// export default connect(mapStateToProps)(App);
