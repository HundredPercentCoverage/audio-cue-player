import React, { useState, useRef, useEffect, useContext } from 'react'
import { Button, Icon, Segment } from 'semantic-ui-react';
import { PlayersContext } from '../App';

function AudioPlayer(props) {
  const playersContext = useContext(PlayersContext);

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  const player = useRef();
  const fileInput = useRef();

  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (play) {
      player.current.play();
    }

    if (!play) {
      player.current.pause();
    }
    
  }, [play])

  const handleStopClick = () => {
    setPlay(false);
    player.current.currentTime = 0;
  }

  const handleFileChange = (e) => {
    setPlay(false);
    setFileName(e.target.files[0].name);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const { playerId } = props;

  return (
    <Segment>
      <audio src={file} ref={player} onEnded={() => setPlay(false)}/>
      <input type="file" ref={fileInput} accept="audio/*" hidden onChange={handleFileChange} />
      <Button icon onClick={() => fileInput.current.click()}>
        <Icon name="folder" />
      </Button>
      <Button disabled={!file} icon onClick={() => setPlay(!play)}>
        <Icon name={play ? 'pause' : 'play'} color={play ? 'blue' : 'green'}/>
      </Button>
      <Button disabled={!file} icon onClick={handleStopClick}>
        <Icon name="stop" color="red" />
      </Button>
      <Button icon onClick={() => playersContext.playersDispatch({ type: 'delete', id: playerId })}>
        <Icon name="delete" />
      </Button>
      <span style={{ padding: 'inherit' }}>{fileName || 'No file selected'}</span>
    </Segment>
  )
}

export default AudioPlayer
