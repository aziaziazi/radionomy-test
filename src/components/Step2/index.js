import React from 'react';

import GenreChoose from './genreChoose';
import GenreSearch from './genreSearch';

const Step2 = ({genres, onToggleGenre}) => {
  return (
    <div>
      <h1>Tell us what kind of station it is.</h1>
      <GenreChoose
        genres={genres}
        onToggleGenre={onToggleGenre}
      />
      <GenreSearch genres={genres} />
    </div>
  );
}

export default Step2;
