import React, { useReducer, createContext } from 'react';
import PlayersReducer from './PlayersReducer';

// Start with a single player
const initialState = {
  players: [{ id: 1, selected: true, file: null }]
};

// Context to be used by players
export const PlayersContext = createContext(initialState);

// Provider component
export const PlayersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlayersReducer, initialState);

  return (
    <PlayersContext.Provider value={{state, dispatch}}>
      {children}
    </PlayersContext.Provider>
  );
}