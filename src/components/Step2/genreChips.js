import React from 'react';
import styled from 'styled-components';

import Chip from '../Chip';


const GenreChipsWrapper = styled.div`
  margin: 0 -5.6px;
`

const genreChips = ({genres, onToggleGenre}) => {
  const renderChip = (genre) => (
      <Chip
        key={genre.ID}
        type={"genre"}
        genreID={genre.ID}
        label={genre.Name}
        onClick={onToggleGenre}
        selected = {genre.selected}
      />
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
    <GenreChipsWrapper>
      {genres.map((genre) =>
        (genre.ParentGenreID == null)
          ? renderChip(genre)
          : renderIfParentSelected(genre)
      )}
    </GenreChipsWrapper>
  );
}

export default genreChips;
