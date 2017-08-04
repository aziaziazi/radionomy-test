import React from 'react';

import styled from 'styled-components';

import GenreChoose from './genreChoose';
import GenreSearch from './genreSearch';

const H1Wrapper = styled.h1`
  height: 48px;
  width: 574px;
  color: #333333;
  font-family: "Proxima Nova";
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
  text-align: center;
`

const Step2 = ({genres, onToggleGenre}) => {
  return (
    <div>
      <H1Wrapper>Tell us what kind of station it is.</H1Wrapper>
      <GenreChoose
        genres={genres}
        onToggleGenre={onToggleGenre}
      />
      <GenreSearch genres={genres} />
    </div>
  );
}

export default Step2;
