import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import { useRef } from 'react';
import { useContext } from 'react';
import { PlayersContext } from '../App';
import useAudio from '../hooks/useAudio';

function SingleAudioPlayer({ file, selected, playerId }) {
  const { playing, toggle, stop } = useAudio(file);
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
      <Button disabled={!file} icon onClick={toggle}>
        <Icon name={playing ? 'pause' : 'play'} color={playing ? 'blue' : 'green'}/>
      </Button>
      <Button disabled={!file} icon onClick={stop}>
        <Icon name="stop" color="red" />
      </Button>
      <Button icon onClick={() => dispatch({ type: 'delete', id: playerId })}>
        <Icon name="delete" />
      </Button>
      <span style={{ padding: 'inherit' }}>{file ? file.name : 'No file selected'}</span>
    </Segment>
  )
}

export default SingleAudioPlayer
