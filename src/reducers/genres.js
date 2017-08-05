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
    console.log('click =>');
      return state.map(genre =>
        (genre.ID === action.genreID)
          ? {...genre, Expended: !genre.Expended}
          : genre
      )
    default:
      return state;
  }
}

