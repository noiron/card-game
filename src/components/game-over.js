import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  color: greenyellow;
  user-select: none;
  padding-top: 40px;
`;

class GameOver extends Component {

  render() {

    const { 
      title = '游戏结束',
      // content = '大侠请交钱再来'
    } = this.props;


    return (
      <Wrapper>
        <h1>{title}</h1>
        {/* <p>{content}</p> */}
        <button onClick={() => window.location.reload()}>一键销毁</button>
      </Wrapper>
    )
  }
}

export default GameOver;
