import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import rough from 'roughjs';
import { card_source } from '../constants';
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

class CardView extends Component {

  constructor(props) {
    super(props);
    // let cardBorder = React.createRef();

    this.state = {
      shouldShowInfo: false,
    }

    this.isMouseIn = false;
  }
  
  componentDidMount() {
    this.setBorder();
  }
  

  handleDoubleClick = () => {
    this.props.playCard();
  }

  setBorder = () => {
    const svg = this.refs.cardBorder;
    const rc = rough.svg(svg);
    const strokeColor = this.props.source === card_source.monster
      ? 'red'
      : 'black';

    const node = rc.rectangle(0, 0, 100, 130, {
      stroke: strokeColor
    });
    svg.appendChild(node);
  }

  handleHover = () => {
    this.isMouseIn = true;

    // 延时之后显示额外的卡牌说明信息
    delay(1000).then(() => {
      if (!this.isMouseIn || this.props.isDragging) return;
      this.setState({ shouldShowInfo: true });
    })
  }

  handleLeave = () => {
    this.setState({ shouldShowInfo: false });
    this.isMouseIn = false;
  }

  render() {
    const { name, desc, attack, armor, source, isDragging, extraInfo } = this.props;

    return (
      <Wrapper 
        className={classNames('card', source, { 'is-dragging': isDragging})}  
        onDoubleClick={this.handleDoubleClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleLeave}
      >
        <svg className="card-border" ref={'cardBorder'}></svg>
        <p className="name">{name}</p>
        <p className={desc.length <=2 ? 'desc emoji' : 'desc'}>{desc}</p>
        {attack > 0 && <p>攻击：{attack}</p>}
        {armor >0  && <p>护甲：{armor}</p>}

        {(this.state.shouldShowInfo && !isDragging) && <CardDesc info={extraInfo} />}
      </Wrapper>
    )
  }
}

CardView.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  attack: PropTypes.number,
  armor: PropTypes.number,
}

export default CardView;
