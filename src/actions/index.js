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

export const toggle_genre = (genre) => {
  return {
    type: 'TOGGLE_GENRE',
    genreID: genre.ID,
  }
}

