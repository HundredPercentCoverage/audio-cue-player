import React, { useContext, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';

import { PlayersContext } from '../context/PlayersContext';
import useAudio from '../hooks/useAudio';

function MainPlayer({ selectedFile }) {
  const { playing, togglePlayback, ended } = useAudio(selectedFile);
  const { dispatch } = useContext(PlayersContext);

  useEffect(() => {
    if (ended) {
      dispatch({ type: 'selectnext' });
    }
  }, [ended, dispatch]);

  return (
    <>
      <Button.Group>
        <Button icon onClick={() => dispatch({ type: 'selectprevious' })}>
          <Icon name='fast backward' />
        </Button>
        <Button icon onClick={togglePlayback}>
          <Icon name={ playing ? 'pause' : 'play' } color={playing ? 'blue' : 'green'} />
        </Button>
        <Button icon onClick={() => dispatch({ type: 'selectnext' })}>
          <Icon name='fast forward' />
        </Button>
      </Button.Group>
      <span style={{ padding: '1em' }}>{selectedFile ? selectedFile.name : 'No file'}</span>
    </>
  )
}

export default MainPlayer
