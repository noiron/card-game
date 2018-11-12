import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { run_status, GameStatusType } from '../constants';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  color: greenyellow;
  user-select: none;
  padding-top: 40px;

  h1 {
    margin-top: 200px;
    color: lightgray;
  }
`;

interface IGameOverProps {
  status: GameStatusType;
}

class GameOver extends Component<IGameOverProps> {

  render() {

    const { status } = this.props;
    const title = status === run_status.win ? '你赢了' : '你输了';

    return (
      <Wrapper>
        <h1>{title}</h1>
        <button onClick={() => window.location.reload()}>一键销毁</button>
      </Wrapper>
    )
  }
}

// GameOver.propTypes = {
//   title: PropTypes.string,
//   status: PropTypes.oneOf([
//     run_status.win,
//     run_status.lose
//   ]).isRequired,
// }

export default GameOver;
