/**
 * 显示卡牌背面的图案
 */
import React from 'react';
import styled from 'styled-components';
import { card_width, card_height } from 'src/constants';

const CardBackBox = styled.div`
  width: ${card_width}px;
  height: ${card_height}px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #f1f1f1;
`;

const CardBack = (props: any) => {
  
  return (
    <CardBackBox />
  )
}


export default CardBack;