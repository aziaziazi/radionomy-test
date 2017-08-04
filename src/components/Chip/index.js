import React from 'react';
import styled from 'styled-components';

const ChipWrapper = styled.p`
  display: inline-block;
  padding: 0 15px;
  margin: 5.25px 5.6px;
  height: ${props => props.big
    ? '86px'
    : '31px'
  };
  line-height: 31px;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  border-radius: 100px;
  background: linear-gradient(90deg, #04D4EA 0%, #27A5E5 100%);

    // height: 19px;
    // width: 86px;
    // color: #FFFFFF;
    // font-family: "Proxima Nova";
    // font-size: 16px;
    // font-weight: 600;
    // line-height: 19px;
    // text-align: center;
`

const Chip = ({genre, onToggleGenre}) => (
  <ChipWrapper onClick={() => onToggleGenre(genre)}>
    {genre.Name}
  </ChipWrapper>
)

export default Chip;
