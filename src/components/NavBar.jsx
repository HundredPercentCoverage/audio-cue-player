import React, { useState } from 'react';
import { Menu, Modal } from 'semantic-ui-react';

function NavBar() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Menu inverted fixed='top'>
        <Menu.Item header>
          <h2>Q</h2>
        </Menu.Item>
        <Menu.Item onClick={() => setModalActive(!modalActive)}>How to Use</Menu.Item>
        <Menu.Item href='https://github.com/HundredPercentCoverage/audio-cue-player' target='_blank'>GitHub</Menu.Item>
      </Menu>
      <Modal
        open={modalActive}
        onClose={() => setModalActive(false)}
        closeIcon
      >
        <Modal.Header>How to Use</Modal.Header>
        <Modal.Content>
          <p>
            With this app you can queue up a selection of your own audio cues and play them in sequence, 
            for example if you are in an amateur theatre group.
          </p>
          <p>
            Use the button with the folder icon in a cue to select a file from your machine. Use the play/pause and stop buttons
            to preview the cue. Click the X button in a cue to delete it.
          </p>
          <p>
            Use the '+' button to add a new cue. Cues can be moved up and down the list using the up and down arrow buttons on each.
            A cue with the green highlight is the one currently selected.
          </p>
          <p>
            The controls at the top of the cue list are the master playback. Press the play button to hear the currently selected
            cue. When that cue has finished playing, the master playback will automatically advance to the next cue in the list.
            You can use the left and right buttons to manually select a cue.
          </p>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default NavBar;
