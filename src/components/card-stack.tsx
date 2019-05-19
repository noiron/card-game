/**
 * 用于显示双方的牌堆数量
 */

import React from 'react';
import styled from 'styled-components';
import { card_width, card_height } from 'src/constants';
import { delay } from '../utils';

interface ICardStackProps {
  num: number;
  style: any;
}

interface ICardStackState {
  shouldShowInfo: boolean;
}

const Wrapper = styled.div`
  width: ${card_width * 1}px;
  height: ${card_height * 1}px;
  line-height: ${card_height * 1}px;
  border: 2px solid #999;
  color: #333;
  border-radius: 4px;
  position: absolute;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

const Info = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #aaa;
  position: absolute;
  left: 100%;
  top: 10%;
  left: -130%;
  width: 120%;
`

class CardStack extends React.Component<ICardStackProps> {
  isMouseIn = false;
  state: ICardStackState;

  constructor(props: ICardStackProps) {
    super(props);

    this.state = {
      shouldShowInfo: false
    }
  }

  handleHover = async () => {
    this.isMouseIn = true;
    await delay(500);
    if (!this.isMouseIn) { return; }
    this.setState({ shouldShowInfo: true });
  }

  handleLeave = () => {
    this.setState({ shouldShowInfo: false });
    this.isMouseIn = false;
  }


  render() {
    const { num, style } = this.props;
    const { shouldShowInfo } = this.state;

    return (
      <Wrapper style={style}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}
      >
        <span>{num}</span>
        {shouldShowInfo && <Info>牌堆中还剩{num}张牌</Info>}
      </Wrapper>
    )
  }
}

export default CardStack;

