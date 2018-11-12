import React, { Component, ReactInstance } from 'react';
import styled from 'styled-components';
// import { PropTypes } from 'prop-types';
import rough from 'roughjs';

const Wrapper = styled.div`
  width: 120px;
  height: 120px;
  /* border: 2px solid #aaa; */
  /* border-radius: 5px; */
  font-size: 12px;
  text-align: center;
  position: relative;

  svg {
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
  }
`;

interface IProps {
  life: number;
  armor: number;
  mana: number;
  className?: string;
}

class Monster extends Component<IProps> {
  monsterBorder: SVGSVGElement;

  componentDidMount() {
    this.setBorder();
  }

  setBorderRef = (element: SVGSVGElement) => {
    this.monsterBorder = element;
  }

  setBorder = () => {
    const svg: SVGSVGElement = this.monsterBorder;
    const rc = rough.svg(svg);
    const strokeColor = '#000';
    const node = rc.rectangle(0, 0, 130, 130, {
      stroke: strokeColor,
      strokeWidth: 3,
      roughness: 2
    });
    (svg as any).appendChild(node);
  }

  render() {
    const { life, armor, mana } = this.props;

    return (
      <Wrapper className={this.props.className}>
        <svg ref={this.setBorderRef} />
        <p className="avatar">{
          // eslint-disable-next-line
          }<span>👹</span>
        </p>
        <p>生命值：{`${life}`}</p>
        <p>护甲：{`${armor|| 0}`}</p>
        <p>法力：{`${mana}`}</p>
      </Wrapper>
    )
  }
}

// Monster.propTypes = {
//   life: PropTypes.number.isRequired,
//   armor: PropTypes.number.isRequired,
// }

export default Monster;
