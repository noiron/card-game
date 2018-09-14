import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 90px;
  height: 120px;
  border: 2px solid #000;
  text-align: center;
  font-size: 14px;
  user-select: none;

  p {
    margin: 0;
    margin-bottom: 10px;
  }

  .name {
    font-size: 20px;
    margin-bottom: 10%;
  }
`;

class Card extends Component {
  // constructor() {
  //   super();
  // }

  handleDoubleClick = () => {
    console.log('双击卡牌');
    this.props.playCard();
  }


  render() {
    const { name, desc, attack, armor } = this.props;

    return (
      <Wrapper className="card" onDoubleClick={this.handleDoubleClick}>
        <p className="name">{name}</p>
        <p>{desc}</p>
        {attack > 0 && <p>攻击：{attack}</p>}
        {armor >0  && <p>护甲：{armor}</p>}
      </Wrapper>
    )
  }
}

export default Card;
