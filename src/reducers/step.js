export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_STEP':
      return state + 1
    case 'DECREMENT_STEP':
      return state - 1
    default:
      return state;
  }
}
