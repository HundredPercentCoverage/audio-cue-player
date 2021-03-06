import React, { useContext } from 'react';
import { Container, Segment, Header, Button, Icon } from 'semantic-ui-react';

import SingleAudioPlayer from './SingleAudioPlayer';
import MainPlayer from './MainPlayer';
import { PlayersContext } from '../context/PlayersContext';
import NavBar from './NavBar';

const style = {
  h1 : {
    marginTop: '3em',
  },
};

function Main() {
  const { state, dispatch } = useContext(PlayersContext);
  const { players } = state;

  const selectedFile = players.length ? players.find(player => player.selected).file : null;

  return (
    <>
      <NavBar />
      <Container>
        <Header as='h1' content='Your Cues' style={style.h1} textAlign='center' />
        <MainPlayer selectedFile={selectedFile}/>
        <Segment.Group>
          {players.map(player => <SingleAudioPlayer key={player.id} selected={player.selected} file={player.file} playerId={player.id} />)}
        </Segment.Group>
        <Button icon onClick={() => dispatch({ type: 'add' })}>
          <Icon name="plus" />
        </Button>
      </Container>
    </>
  );
}

export default Main;
