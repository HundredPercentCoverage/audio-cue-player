import React, { useReducer } from 'react';
import { Container, Segment, Header, Button, Icon } from 'semantic-ui-react';
import AudioPlayer from './components/AudioPlayer';

export const PlayersContext = React.createContext();

const style = {
  h1 : {
    marginTop: '3em',
  },
}

const initialState = [{ id: 1, selected: true }];

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
    default:
      return initialState;
  }
}

function App() {
  const [players, dispatch] = useReducer(reducer, initialState);

  return (
    <PlayersContext.Provider value={{ playersState: players, playersDispatch: dispatch }}>
      <div>
        <Header as='h1' content='Cue Queue' style={style.h1} textAlign='center' />
        <Container>
          <Button.Group>
            <Button icon onClick={() => dispatch({ type: 'selectprevious' })}>
              <Icon name='fast backward' />
            </Button>
            <Button icon>
              <Icon name='play' />
            </Button>
            <Button icon onClick={() => dispatch({ type: 'selectnext' })}>
              <Icon name='fast forward' />
            </Button>
          </Button.Group>
          <Segment.Group>
            {players.map(player => <AudioPlayer key={player.id} playerId={player.id} selected={player.selected} />)}
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
