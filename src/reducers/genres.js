import { mockGenres } from '../mocks/mockGenres';

export default (state = mockGenres, action) => {
  switch (action.type) {
    case 'TOGGLE_GENRE':
      return state.map(genre =>
        (genre.ID === action.genreID)
          ? {...genre, selected: !genre.selected}
          : genre
      )
    case 'TOGGLE_EXPEND':
      return state.map(genre =>
        (genre.ID === action.genreID)
          // TODO: lowerCase "Expended"
          ? {...genre, Expended: !genre.Expended}
          : genre
      )
    default:
      return state;
  }
}

