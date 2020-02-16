import React, { useReducer } from 'react';
import { Container, Segment, Header, Button, Icon } from 'semantic-ui-react';
import AudioPlayer from './components/AudioPlayer';

const style = {
  h1 : {
    marginTop: '3em',
  },
}

const initialState = [{ id: 1 }];

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1
        }
      ];
    default:
      return state;
  }
}

function App() {
  const [players, dispatch] = useReducer(reducer, initialState);

  const addPlayer = () => {
    dispatch({
      type: 'add',
    });
  }

  return (
    <div>
      <Header as='h1' content='Cue Queue' style={style.h1} textAlign='center' />
      <Container>
        <Segment.Group>
          {players.map(player => <AudioPlayer key={player.id} playerId={player.id} />)}
        </Segment.Group>
        <Button icon onClick={addPlayer}>
          <Icon name="plus" />
        </Button>
      </Container>
    </div>
  );
}

export default App;
