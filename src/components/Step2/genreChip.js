import React from 'react';

const genreChip = ({genre, onToggleGenre}) => {
  return (
    <div onTouchTap={() => onToggleGenre(genre)}>
      {genre.Name}
    </div>
  );
}


export default genreChip;
