import React from 'react';
import styled from 'styled-components';

import GenreChips from './genreChips';

const IntroWrapper = styled.p`
  height: 16px;
  width: 245px;
  color: #696B70;
  font-size: 14px;
  line-height: 16px;
`
const IntroItalicWrapper = styled.p`
  height: 16px;
  width: 214px;
  opacity: 0.5;
  color: #696B70;
  font-size: 13px;
  font-style: italic;
  line-height: 16px;
`

const NumberSelectedWrapper = styled.p`
  height: 16px;
  width: 114px;
  color: #ABACAF;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
`

const genreChoose = ({genres, onToggleGenre}) => {
  return (
    <div>
      <IntroWrapper>What kind of music will you broadcast?</IntroWrapper>
      <IntroItalicWrapper>(Select from 1 to 5 genres maximum)</IntroItalicWrapper>
      <NumberSelectedWrapper>X genres selected</NumberSelectedWrapper>
      <GenreChips
        genres={genres}
        onToggleGenre={onToggleGenre}
      />
    </div>
  );
}

export default genreChoose;
