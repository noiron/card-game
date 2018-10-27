import React, { Component } from 'react';
import styled from 'styled-components';
import rough from 'roughjs';

const Wrapper = styled.div`
  width: 120px;
  height: 120px;
  /* border: 2px solid #aaa; */
  /* border-radius: 5px; */
  font-size: 12px;
  text-align: left;
  padding: 5px;
  position: relative;

  .hero-border {
    width: 120%;
    height: 120%;
    position: absolute;
    top: 0;
    left: 0;
  }

  p {
    margin: 0;
  }

  .avatar {
    font-size: 32px;
    margin: 5px;
    text-align: center;
  }
`;

class Person extends Component {

  componentDidMount() {
    this.setBorder();
  }

  setBorder = () => {
    const svg = this.refs.heroBorder;
    const rc = rough.svg(svg);
    const strokeColor = '#333 ';
    const node = rc.rectangle(0, 0, 130, 130, {
      stroke: strokeColor,
      strokeWidth: 3,
      roughness: 2.5,
    });
    svg.appendChild(node);
  }

  render() {
    const { life, maxLife, armor } = this.props;

    return (
      <Wrapper className={this.props.className}>
        <svg className="hero-border" ref={'heroBorder'}></svg>
        <p className="avatar">{
        // eslint-disable-next-line
        }<span>🐒</span>
        </p>
        <p>生命值：{`${life} / ${maxLife}`}</p>
        <p>护甲：{`${armor|| 0}`}</p>
      </Wrapper>
    )
  }
}

export default Person;
