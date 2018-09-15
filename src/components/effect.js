import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  /* border: 1px solid #aaa; */
  position: absolute;
  box-shadow: 5px 5px 5px black;
  text-align: center;
  color: red;
  z-index: 10;

  &.target-enemy {
    right: 50px;
    top: 20px;
  }

  &.target-player {
    right: 50px;
    bottom: 35px;
  }

  .name {
    font-size: 20px;
    margin: 10px auto;
  }

  .value {
    font-size: 30px;
  }
`;

class Effect extends Component {

  // 根据效果的对象不同，分为两种类型，以此决定显示的位置

  render() {
    const { name, value, target } = this.props;

    let classes = '';
    if (target === 'enemy') {
      classes += 'target-enemy';
    } else if (target === 'player') {
      classes += 'target-player';
    }
    
    return (
      <Wrapper className={classes}>
        <p className="name">{name}</p>
        <p className="value">{value}</p>
      </Wrapper>
    )
  }
}

export default Effect;
