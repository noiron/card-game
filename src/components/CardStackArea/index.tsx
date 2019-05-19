import React from 'react';
import styled from 'styled-components';
import CardStack from '../card-stack';

const StackAreaBox = styled.section`
  width: 140px;
  height: 240px;
  position: absolute;
  top: 140px;
  right: -120px;
`;

const MonsterCardStack = styled(CardStack)`
  left: 20px;
  top: -20%;
`;

const HeroCardStack = styled(CardStack)`
  left: 20px;
  bottom: -20%;
`;

interface ICardStackAreaProps {
  monsterLen: number;
  heroLen: number;
}


const CardStackArea = (props: ICardStackAreaProps) => {

  const { monsterLen, heroLen } = props;

  return (
    <StackAreaBox>
      <MonsterCardStack num={monsterLen} />
      <HeroCardStack num={heroLen} />
    </StackAreaBox>
  )
}

export default CardStackArea;