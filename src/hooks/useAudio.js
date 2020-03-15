import { useState, useEffect } from 'react'

// https://stackoverflow.com/a/47686478
function useAudio(file) {
  const [audioElement] = useState(new Audio());
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  const toggle = () => setPlaying(!playing);

  audioElement.addEventListener('ended', () => {
    setEnded(true);
    setPlaying(false);
  });

  const stop = () => {
    setPlaying(false);
    audioElement.currentTime = 0;
  }

  useEffect(() => {
    audioElement.src = file ? URL.createObjectURL(file) : '';
  }, [file, audioElement]);

  useEffect(() => {
    playing ? audioElement.play() : audioElement.pause();
  }, [playing, audioElement]);

  return { playing, toggle, stop, ended };
}

export default useAudio
