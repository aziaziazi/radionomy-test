import React from 'react';
import styled from 'styled-components';

const ChipWrapper = styled.p`
  display: inline-block;
  padding: 0 15px;
  padding: ${props => props.type === 'continue' ? '0 76px' : '0 15px'};
  margin: 5.25px 5.6px;
  height: ${props => props.type === 'continue' ? '52px' : '31px'};
  line-height: ${props => props.type === 'continue' ? '52px' : '31px'};
  font-size: ${props => props.type === 'continue' ? '16px' : '14px'};
  font-weight: 600;
  color: #FFFFFF;
  border-radius: 100px;
  background: linear-gradient(90deg, #04D4EA 0%, #27A5E5 100%);
`

const Chip = ({type, genreID, label, onClick}) => {
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

  return (
    <ChipWrapper type={type} onClick={() => handleClick()}>
      {label}
    </ChipWrapper>
  )
}

export default Chip;
