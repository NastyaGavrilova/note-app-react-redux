import React, { FC } from 'react';
import { connect, useSelector } from 'react-redux';
import NoteContainer from './components/NoteContainer/NoteContainer';
import StatisticsList from './components/StatisticsList/StatisticsList';
import { State } from './store/types/types';

// interface AppProps {
//   showArchived: boolean
// }
const App = () => {


  return (
    <div className="App">

      <NoteContainer />
      <StatisticsList />
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
