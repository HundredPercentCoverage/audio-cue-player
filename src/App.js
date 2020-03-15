import React, { useReducer } from 'react';
import { Container, Segment, Header, Button, Icon } from 'semantic-ui-react';
import SingleAudioPlayer from './components/SingleAudioPlayer';
import MainPlayer from './components/MainPlayer';

export const PlayersContext = React.createContext();

const style = {
  h1 : {
    marginTop: '3em',
  },
}

const initialState = [{ id: 1, selected: true, file: null }];

const reducer = (state, action) => {
  let newState, indexOfPlayerToMove, indexOfSelectedPlayer;

  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: state.length ? state[state.length - 1].id + 1 : 1
        }
      ];
    case 'delete':
      newState = state.filter(el => el.id !== action.id);

      return [
        ...newState
      ];
    case 'moveup':
      indexOfPlayerToMove = state.findIndex(player => player.id === action.id);
      newState = state;

      if (indexOfPlayerToMove !== 0) {
        const playerToMove = state[indexOfPlayerToMove];

        newState[indexOfPlayerToMove] = newState[indexOfPlayerToMove - 1];
        newState[indexOfPlayerToMove - 1] = playerToMove;
      }
      
      return [
        ...newState
      ];
    case 'movedown':
      indexOfPlayerToMove = state.findIndex(player => player.id === action.id);
      newState = state;

      if (indexOfPlayerToMove !== newState.length - 1) {
        const playerToMove = state[indexOfPlayerToMove];

        newState[indexOfPlayerToMove] = newState[indexOfPlayerToMove + 1];
        newState[indexOfPlayerToMove + 1] = playerToMove;
      }
      
      return [
        ...newState
      ];
    case 'selectnext':
      newState = state;

      indexOfSelectedPlayer = newState.findIndex(player => player.selected);

      if (indexOfSelectedPlayer < newState.length - 1) {
        newState[indexOfSelectedPlayer].selected = false;
        newState[indexOfSelectedPlayer + 1].selected = true;
      }
      
      return [
        ...newState
      ];
    case 'selectprevious':
      newState = state;

      indexOfSelectedPlayer = newState.findIndex(player => player.selected);

      if (indexOfSelectedPlayer > 0) {
        newState[indexOfSelectedPlayer].selected = false;
        newState[indexOfSelectedPlayer - 1].selected = true;
      }
      
      return [
        ...newState
      ];
    case 'setplayerfile':
      newState = state;

      const indexOfPlayerToChange = newState.findIndex(player => player.id === action.id);
      newState[indexOfPlayerToChange].file = action.file;

      return [
        ...newState
      ];
    default:
      return initialState;
  }
}

function App() {
  const [players, dispatch] = useReducer(reducer, initialState);

  const selectedFile = players.find(player => player.selected).file;

  return (
    <PlayersContext.Provider value={{ players, dispatch }}>
      <div>
        <Header as='h1' content='Cue Queue' style={style.h1} textAlign='center' />
        <Container>
          <MainPlayer selectedFile={selectedFile} />
          <Segment.Group>
            {players.map(player => <SingleAudioPlayer key={player.id} selected={player.selected} file={player.file} playerId={player.id} />)}
          </Segment.Group>
          <Button icon onClick={() => dispatch({ type: 'add' })}>
            <Icon name="plus" />
          </Button>
        </Container>
      </div>
    </PlayersContext.Provider>
  );
}

export default App;
