import React from 'react';

import styled from 'styled-components';

import GenreChoose from './genreChoose';
import GenreSearch from './genreSearch';
import StationType from './stationType';
import StreamSpeed from './streamSpeed';

const H1Wrapper = styled.h1`
  color: #333333;
  font-family: "Proxima Nova";
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 29px;
`

const Step2 = ({genres, onToggleGenre, onExpend}) => {
  // render Title and Sections
  return (
    <div>
      <H1Wrapper>Tell us what kind of station it is.</H1Wrapper>
      <GenreChoose
        genres={genres}
        onToggleGenre={onToggleGenre}
        onExpend={onExpend}
      />
      <GenreSearch/>
      <StationType/>
      <StreamSpeed/>
    </div>
  );
}

export default Step2;
