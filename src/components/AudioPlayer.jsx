import React, { useState, useRef, useEffect } from 'react'
import { Button, Icon, Segment } from 'semantic-ui-react';

function AudioPlayer(props) {
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
      <span style={{ padding: 'inherit' }}>{fileName || 'No file selected'}</span>
    </Segment>
  )
}

export default AudioPlayer
