import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #aaa;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;

  p {
    margin: 0;
  }

  .avatar {
    font-size: 32px;
    margin: 5px;
  }
`;

class Boss extends Component {

  render() {
    const { life, armor } = this.props;

    return (
      <Wrapper className={this.props.className}>
        <p className="avatar">
          <span>👹</span>
        </p>
        <p>生命值：{`${life}`}</p>
        <p>护甲：{`${armor|| 0}`}</p>
      </Wrapper>
    )
  }
}

export default Boss;