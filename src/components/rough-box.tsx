/**
 * 用于显示手绘风格的边框的组件
 */

import React from 'react';
import rough from 'roughjs';
import styled, { ThemeProvider } from 'styled-components';

interface IBoxProps {
  style?: any;
  width: number;
  height: number;
  strokeColor?: string;
  roughness?: number;
  strokeWidth?: number;
}

const Wrapper = styled.div`
  width: ${(props: any) => props.theme.width}px;
  height: ${(props: any) => props.theme.height}px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  .border {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

class RoughBox extends React.Component<IBoxProps> {
  border: SVGSVGElement;

  componentDidMount() {
    this.setBorder();
  }

  setBorder = () => {
    const { width = 100, height = 60, strokeColor = 'black', 
      roughness = 1, strokeWidth = 1
    } = this.props;
    const svg = this.border;
    const rc = rough.svg(svg);

    const node = rc.rectangle(width*0.05, height*0.05, width*0.9, height*0.9, {
      stroke: strokeColor,
      roughness,
      strokeWidth,
    });
    (svg as any).appendChild(node);
  };

  render() {
    const { width = 100, height = 60, style } = this.props;
    const theme = { width, height };

    return (
      <ThemeProvider theme={theme}>
        <Wrapper className="wrapper" style={style}>
          <svg className="border" ref={ele => (this.border = ele)} />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default RoughBox;


