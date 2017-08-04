import React from 'react';

import GenreChips from './genreChips';

const genreChoose = ({genres, onToggleGenre}) => {
  return (
    <div>
      <p>What kind of music will you broadcast?</p>
      <i>(Select from 1 to 5 genres maximum)</i>
      <p>X genres selected</p>
      <GenreChips
        genres={genres}
        onToggleGenre={onToggleGenre}
      />
    </div>
  );
}

export default genreChoose;
