import React from 'react';
import styled from 'styled-components';

const ChipWrapper = styled.p`
  display: inline-block;
  padding: 0 15px;
  padding: 0 15px;
  margin: 5.25px 5.6px;
  height: 31px;
  line-height: 31px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 100px;
  background:  ${ props => props.selected === true ? 'linear-gradient(90deg, #04D4EA 0%, #27A5E5 100%)' : 'none' };
  color: ${ props => props.selected === true ? '#FFFFFF' : '#18A4E8' };
  border: ${ props => props.selected === true ? 'none' : '1px solid #D9DEE8' };
  cursor: pointer;
`

const Chip = ({genreID, label, onClick, selected, isParentGenre, Expended, onExpend}) => {
  const expendButton = () => (
    <span onClick={(e) => {
      e.stopPropagation()
      onExpend(genreID)
    }}>
      {Expended ? " -" : " +"}
    </span>
  )

  return (
    <ChipWrapper
      selected={selected}
      onClick={(e) => {
        e.stopPropagation()
        onClick(genreID)
      }}>
      {label}
      { isParentGenre === true
        ? expendButton()
        : null
      }
    </ChipWrapper>
  )
}

export default Chip;
