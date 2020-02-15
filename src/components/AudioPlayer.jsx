import React, { useState, useRef, useEffect } from 'react'
import { Button, Icon, Segment } from 'semantic-ui-react';

function AudioPlayer() {
  const [file, setFile] = useState(null);
  const player = useRef();

  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (file) {
      if (play) {
        player.current.play();
      }

      if (!play) {
        player.current.pause();
      }
    }
    
  }, [play, file])

  const handleStopClick = () => {
    setPlay(false);
    player.current.currentTime = 0;
  }

  return (
    <Segment>
      <audio src={file} ref={player} />
      <Button loading={!file} icon onClick={() => setPlay(!play)}>
        <Icon name={play ? 'pause' : 'play'} />
      </Button>
      <Button icon onClick={handleStopClick}>
        <Icon name="stop" />
      </Button>
      <input type="file" accept="audio/*" onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))} />
    </Segment>
  )
}

export default AudioPlayer
