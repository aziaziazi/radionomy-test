import React from 'react';
import styled from 'styled-components';

const InfoLineWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 17px 0;
`

const IntroWrapper = styled.div`
  color: #696B70;
  font-size: 14px;
`
const IntroItalicWrapper = styled.div`
  opacity: 0.5;
  color: #696B70;
  font-size: 13px;
  font-style: italic;
  margin-left: 10px;
`

const NumberSelectedWrapper = styled.div`
  color: #ABACAF;
  font-size: 14px;
  text-align: right;
  flex-grow: 1;
  flex-end;
`

const infoLine = ({mainText, secondText, selectedCounter}) => {
  return (
    <InfoLineWrapper>
      <IntroWrapper>{mainText}</IntroWrapper>
      <IntroItalicWrapper>{secondText}</IntroItalicWrapper>
      {selectedCounter
        ? <NumberSelectedWrapper>{selectedCounter}</NumberSelectedWrapper>
        : <div/>
      }

    </InfoLineWrapper>
  );
}

export default infoLine;
