import React, { Component } from 'react';
import styled from 'styled-components';
import { PlayerType } from '../constants';

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  /* border: 1px solid #aaa; */
  position: absolute;
  box-shadow: 5px 5px 5px black;
  text-align: center;
  color: red;
  z-index: 10;
  background: #fff;
  border: 1px solid #ddd;

  &.target-monster {
    right: 50px;
    top: 20px;
  }

  &.target-hero {
    right: 50px;
    top: 400px;
  }

  .name {
    font-size: 20px;
    margin: 10px auto;
  }

  .value {
    font-size: 30px;
  }
`;

interface IProps {
  name: string;
  value: number | string;
  target: PlayerType;
}

class Effect extends Component<IProps> {

  // 根据效果的对象不同，分为两种类型，以此决定显示的位置

  public render() {
    const { name, value, target } = this.props;

    const classes = 'target-' + target;
    
    return (
      <Wrapper className={classes}>
        <p className="name">{name}</p>
        <p className="value">{value}</p>
      </Wrapper>
    )
  }
}

export default Effect;
