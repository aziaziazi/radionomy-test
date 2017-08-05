export const increment_step = () => {
  return {
    type: 'INCREMENT_STEP',
  }
}

export const decrement_step = () => {
  return {
    type: 'DECREMENT_STEP',
  }
}

export const toggle_genre = (genreID) => {
  return {
    type: 'TOGGLE_GENRE',
    genreID: genreID,
  }
}

