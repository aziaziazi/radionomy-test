import React from 'react';
import styled from 'styled-components';

import Chip from '../Chip';


const GenreChipsWrapper = styled.div`
  margin: 0 -5.6px;
`

const genreChips = ({genres, onToggleGenre, onExpend}) => {
  // Render one chip
  const renderChip = (genre) => {
    return (
      <Chip
        // needed for mep safety
        key={genre.ID}
        // cant' use the Key inside the componement !!
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
      {genres.map((genre) =>  // Map through the genres list
        genre.isParentGenre   // If find a parent genre...
          ? renderChip(genre) // ... render it
          : renderIfParentExpended(genre) // else, render only if it's own parent is expended
      )}
    </GenreChipsWrapper>
  );
}

export default genreChips;
