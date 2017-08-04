import React from 'react';

import Chip from '../Chip';

const genreChips = ({genres, onToggleGenre}) => {
  const renderChip = (genre) => (
      <Chip
        key={genre.ID}
        genre={genre}
        onToggleGenre={onToggleGenre} />
  )

  // render sub-genre if its parent is selected
  const renderIfParentSelected = (genre) => (
    genres.map((parentGenre) => {
      return (genre.ParentGenreID === parentGenre.ID && parentGenre.selected)
      ? (renderChip(genre))
      : null
    })
  )

  return (
    <div>
      {genres.map((genre) =>
        (genre.ParentGenreID == null)
          ? renderChip(genre)
          : renderIfParentSelected(genre)
      )}
    </div>
  );
}

export default genreChips;
