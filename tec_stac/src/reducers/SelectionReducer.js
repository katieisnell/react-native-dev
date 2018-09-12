// If we pass an undefined state, the following makes the state null
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload; // We return the object's library id
    default:
      return state; // Just return the state which was in the reducer the last time it ran
  }
};
