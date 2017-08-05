import React from 'react';
import styled from 'styled-components';

const ChipWrapper = styled.p`
  display: inline-block;
  padding: 0 15px;
  padding: ${ props => props.type === 'continue' ? '0 76px' : '0 15px' };
  margin: 5.25px 5.6px;
  height: ${ props => props.type === 'continue' ? '52px' : '31px' };
  line-height: ${ props => props.type === 'continue' ? '52px' : '31px' };
  font-size: ${ props => props.type === 'continue' ? '16px' : '14px' };
  font-weight: 600;
  border-radius: 100px;
  background:  ${ props => props.selected === true ? 'linear-gradient(90deg, #04D4EA 0%, #27A5E5 100%)' : 'none' };
  color: ${ props => props.selected === true ? '#FFFFFF' : '#18A4E8' };
  border: ${ props => props.selected === true ? 'none' : '1px solid #D9DEE8' };
`

const Chip = ({type, genreID, label, onClick, selected}) => {
  const handleClick = () => {
    switch (type) {
      case 'genre':
        onClick(genreID);
        break;
      case 'continue':
        onClick()
        break
      default:
        return ;
    }
  }
  selected ? console.log('true') : console.log('false')
  return (
    <ChipWrapper selected={selected} type={type} onClick={() => handleClick()}>
      {label}
    </ChipWrapper>
  )
}

export default Chip;
