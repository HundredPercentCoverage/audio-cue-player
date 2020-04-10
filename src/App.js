import React from 'react';
import { PlayersProvider } from './context/PlayersContext';
import Main from './components/Main';

function App() {
  return (
    <PlayersProvider>
      <Main />
    </PlayersProvider>
  );
}

export default App;
