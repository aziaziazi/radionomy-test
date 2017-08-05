import React from 'react';
import styled from 'styled-components';

import Chip from '../Chip';


const GenreChipsWrapper = styled.div`
  margin: 0 -5.6px;
`

const genreChips = ({genres, onToggleGenre, onExpend}) => {
  const renderChip = (genre) => {

    return (
      <Chip
        key={genre.ID}
        genreID={genre.ID}
        label={genre.Name}
        onClick={onToggleGenre}
        onExpend={onExpend}
        selected={genre.selected}
        isParentGenre = {genre.IsParentGenre}
        Expended = {genre.Expended}
      />
    )
  }

  // render sub-genre if its parent is selected
  const renderIfParentExpended = (genre) => (
    genres.map((parentGenre) => {
      return (genre.ParentGenreID === parentGenre.ID && parentGenre.Expended)
      ? (renderChip(genre))
      : null
    })
  )

  return (
    <GenreChipsWrapper>
      {genres.map((genre) =>
        genre.IsParentGenre
          ? renderChip(genre)
          : renderIfParentExpended(genre)
      )}
    </GenreChipsWrapper>
  );
}

export default genreChips;
