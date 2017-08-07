import React from 'react';
import styled from 'styled-components';

// change the aspect of selected chips
const ChipWrapper = styled.div`
  display: inline-block;
  margin: 5.25px 5.6px;
  padding:  ${ props => props.selected === true ? '0 16px' : '0 15px' };
  line-height:  ${ props => props.selected === true ? '31px' : '29px' };
  font-size: 14px;
  font-weight: 600;
  border-radius: 100px;
  background:  ${ props => props.selected === true ? 'linear-gradient(90deg, #04D4EA 0%, #27A5E5 100%)' : 'none' };
  color: ${ props => props.selected === true ? '#FFFFFF' : '#18A4E8' };
  border: ${ props => props.selected === true ? 'none' : '1px solid #D9DEE8' };
  cursor: pointer;
`

const Chip = ({genreID, label, onClick, selected, isParentGenre, Expended, onExpend}) => {

  // Render the clickable +/-
  const expendButton = () => (
    <span onClick={(e) => {
      e.stopPropagation()
      onExpend(genreID)
    }}>
      {Expended ? " -" : " +"}
    </span>
  )

  // Render Chip with it's label and a +/- button if it is expendable (parents)
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
