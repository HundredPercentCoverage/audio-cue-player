export default (state, action) => {
  let indexOfPlayerToMove, indexOfSelectedPlayer;

  switch (action.type) {
    case 'add':
      return {
        players: [
          ...state.players,
          {
            id: state.players.length ? state.players[state.players.length - 1].id + 1 : 1,
            selected: state.players.length ? false : true
          }
        ]
      }
    case 'delete':
      indexOfPlayerToMove = state.players.findIndex(player => player.id === action.id);

      // If the player to remove is selected and there is more than one player in the list
      if (state.players[indexOfPlayerToMove].selected && state.players.length > 1) {
        // Set the next player to be selected, if it exists
        // Otherwise if it's the last player, set the second last one as selected
        if (state.players[indexOfPlayerToMove + 1]) {
          state.players[indexOfPlayerToMove + 1].selected = true;
        } else {
          state.players[state.players.length - 2].selected = true;
        }
      }
      
      return {
        ...state,
        players: state.players.filter(el => el.id !== action.id)
      };
    case 'moveup':
      indexOfPlayerToMove = state.players.findIndex(player => player.id === action.id);

      if (indexOfPlayerToMove !== 0) {
        const playerToMove = state.players[indexOfPlayerToMove];

        state.players[indexOfPlayerToMove] = state.players[indexOfPlayerToMove - 1];
        state.players[indexOfPlayerToMove - 1] = playerToMove;
      }
      
      return {
        ...state
      };
    case 'movedown':
      indexOfPlayerToMove = state.players.findIndex(player => player.id === action.id);

      if (indexOfPlayerToMove !== state.players.length - 1) {
        const playerToMove = state.players[indexOfPlayerToMove];

        state.players[indexOfPlayerToMove] = state.players[indexOfPlayerToMove + 1];
        state.players[indexOfPlayerToMove + 1] = playerToMove;
      }
      
      return {
        ...state
      };
    case 'selectnext':
      indexOfSelectedPlayer = state.players.findIndex(player => player.selected);

      if (indexOfSelectedPlayer < state.players.length - 1) {
        state.players[indexOfSelectedPlayer].selected = false;
        state.players[indexOfSelectedPlayer + 1].selected = true;
      }
      
      return {
        ...state
      }
    case 'selectprevious':
      indexOfSelectedPlayer = state.players.findIndex(player => player.selected);

      if (indexOfSelectedPlayer > 0) {
        state.players[indexOfSelectedPlayer].selected = false;
        state.players[indexOfSelectedPlayer - 1].selected = true;
      }
      
      return {
        ...state
      }
    case 'setplayerfile':
      const indexOfPlayerToChange = state.players.findIndex(player => player.id === action.id);
      state.players[indexOfPlayerToChange].file = action.file;

      return {
        ...state
      }
    default:
      return state;
  }
};