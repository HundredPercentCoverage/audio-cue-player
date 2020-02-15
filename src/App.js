import React, { useState } from 'react';
import { Container, Segment, Header, Button, Icon } from 'semantic-ui-react';
import AudioPlayer from './components/AudioPlayer';

const style = {
  h1 : {
    marginTop: '3em',
  },
}

function App() {
  const [players, setPlayers] = useState([1]);

  const addPlayer = () => {
    setPlayers(prevState => [...prevState, prevState.length + 1]);
  }

  return (
    <div>
      <Header as='h1' content='Cue Queue' style={style.h1} textAlign='center' />
      <Container>
        <Segment.Group>
          {players.map(playerNumber => <AudioPlayer key={playerNumber} />)}
        </Segment.Group>
        <Button icon onClick={addPlayer}>
          <Icon name="plus" />
        </Button>
      </Container>
    </div>
  );
}

export default App;
