import React from 'react';

import GenreChips from './genreChips';
import InfoLine from './infoLine';

const genreChoose = ({genres, onToggleGenre, onExpend}) => {
    // TODO: Store in the store instead
   const GenreText = () => {
    let selectedGenres = [];
    genres.forEach((genre) => {
      if (genre.selected) {
        selectedGenres.push(genre.ID)
      }
    })

    const nbGenresSelected = selectedGenres.length
    switch (nbGenresSelected) {
      case 0:
        return "No genres selected";
      case 1:
        return "1 genre selected";
      default:
        return nbGenresSelected + " genres selected";
    }
  }

  return (
    <div>
      <InfoLine
        mainText="What kind of music will you broadcast?"
        secondText="(Select from 1 to 5 genres maximum)"
        selectedCounter={
          <div>{GenreText()}</div>
        }
        genres={genres}
      />
      <GenreChips
        genres={genres}
        onToggleGenre={onToggleGenre}
        onExpend={onExpend}
      />
    </div>
  );
}

export default genreChoose;
