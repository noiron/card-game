/**
 * 切换回合时，利用 modal 提示
 */

import React from 'react';
import styled from 'styled-components';
import { PlayerType } from 'src/constants';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background: rgba(240, 240, 240, 0.9);

  .text {
    font-size: 30px;
    font-weight: bold;
    width: 200px;
    border: 2px solid #333;
    color: #111;
    text-align: center;
    margin: 270px auto;
  }
`;

interface INextTurnProps {
  turn: PlayerType;
}

const NextTurn = (props: INextTurnProps) => {
  let player = '';
  if (props.turn === 'hero') {
    player = '你';
  } else {
    player = '对手';
  }

  return <Wrapper>
    <p className="text">{`${player}的回合`}</p>
  </Wrapper>;
}

export default NextTurn;
