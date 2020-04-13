import React, { useRef, useContext} from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';

import { PlayersContext } from '../context/PlayersContext';
import useAudio from '../hooks/useAudio';

function SingleAudioPlayer({ file, selected, playerId }) {
  const { playing, togglePlayback, stop } = useAudio(file);
  const fileInput = useRef();

  const { dispatch } = useContext(PlayersContext);

  const handleFileChange = (e) => {
    dispatch({ type: 'setplayerfile', file: e.target.files[0], id: playerId });
  }

  return (
    <Segment color={selected ? "green" : "grey"}>
      <input type="file" ref={fileInput} accept="audio/*" hidden onChange={handleFileChange} />
      <Button icon onClick={() => fileInput.current.click()}>
        <Icon name="folder" />
      </Button>
      <Button disabled={!file} icon onClick={togglePlayback}>
        <Icon name={playing ? 'pause' : 'play'} color={playing ? 'blue' : 'green'}/>
      </Button>
      <Button disabled={!file} icon onClick={stop}>
        <Icon name="stop" color="red" />
      </Button>
      <Button icon onClick={() => dispatch({ type: 'delete', id: playerId })}>
        <Icon name="delete" />
      </Button>
      <span style={{ padding: 'inherit' }}>{file ? file.name : 'No file selected'}</span>
      <Button icon onClick={() => dispatch({ type: 'moveup', id: playerId })} floated='right'>
        <Icon name="arrow up" />
      </Button>
      <Button icon onClick={() => dispatch({ type: 'movedown', id: playerId })} floated='right'>
        <Icon name="arrow down" />
      </Button>
    </Segment>
  )
}

export default SingleAudioPlayer
