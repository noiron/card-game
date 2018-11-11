import React, { Component, Ref } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import rough from 'roughjs';
import { card_source, PlayerType } from '../constants';
import { delay } from '../utils';
import CardDesc from './card-info';

const Wrapper = styled.div`
  width: 90px;
  height: 120px;
  /* border: 2px solid #000; */
  text-align: center;
  font-size: 14px;
  user-select: none;
  /* border-radius: 8px; */
  cursor: move;
  position: relative;

  .card-border {
    /* svg 的尺寸要设置的略大于父容器 */
    width: 120%;
    height: 120%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &.is-dragging {
    opacity: 0.3;
  }

  p {
    margin: 0;
    margin-bottom: 10px;
  }

  .name {
    font-size: 20px;
    margin-bottom: 10%;
  }

  .desc.emoji {
      font-size: 36px;
    }
`;

interface ICardViewProps {
  playCard: () => any;
  source?: PlayerType;
  isDragging?: boolean;
  name: string;
  desc: string;
  attack?: number;
  armor?: number;
  extraInfo?: string;
}

interface IState {
  shouldShowInfo: boolean;
}

class CardView extends Component<ICardViewProps> {
  isMouseIn: boolean;
  state: IState;
  cardBorder: SVGSVGElement;

  constructor(props: ICardViewProps) {
    super(props);
    this.state = {
      shouldShowInfo: false,
    };
    this.isMouseIn = false;
  }
  
  componentDidMount() {
    this.setBorder();
  }
  

  handleDoubleClick = () => {
    this.props.playCard();
  }

  setBorder = () => {
    const svg: SVGSVGElement = this.cardBorder;

    const rc = rough.svg(svg);
    const strokeColor = this.props.source === card_source.monster
      ? 'red'
      : 'black';

    const node = rc.rectangle(0, 0, 100, 130, {
      stroke: strokeColor
    });
    (svg as any).appendChild(node);
  }

  handleHover = () => {
    this.isMouseIn = true;

    // 延时之后显示额外的卡牌说明信息
    delay(1000).then(() => {
      if (!this.isMouseIn || this.props.isDragging) { return; }
      this.setState({ shouldShowInfo: true });
    })
  }

  handleLeave = () => {
    this.setState({ shouldShowInfo: false });
    this.isMouseIn = false;
  }

  setSvgRef = (element:SVGSVGElement) => {
    this.cardBorder = element;
  };

  render() {
    const { name, desc, attack, armor, source, isDragging, extraInfo } = this.props;

    return (
      <Wrapper 
        className={classNames('card', source, { 'is-dragging': isDragging})}  
        onDoubleClick={this.handleDoubleClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}
      >
        <svg className="card-border" ref={this.setSvgRef} />
        <p className="name">{name}</p>
        <p className={desc.length <=2 ? 'desc emoji' : 'desc'}>{desc}</p>
        {attack as number > 0 && <p>攻击：{attack}</p>}
        {armor as number > 0  && <p>护甲：{armor}</p>}

        {(this.state.shouldShowInfo && !isDragging) && <CardDesc info={extraInfo} />}
      </Wrapper>
    )
  }
}

export default CardView;
