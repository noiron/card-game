import React from 'react';
import rough from 'roughjs';
import styled, { ThemeProvider } from 'styled-components';

interface IButtonProps {
  text: string;
  handleClick: () => void;
  style?: any;
  width?: number;
  height?: number;
  strokeColor?: string;
}

const Wrapper = styled.div`
  width: ${(props: any) => props.theme.width}px;
  height: ${(props: any) => props.theme.height}px;
  position: relative;
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

class RoughButton extends React.Component<IButtonProps> {
  border: SVGSVGElement;

  componentDidMount() {
    this.setBorder();
  }

  setBorder = () => {
    const { width = 100, height = 60, strokeColor = 'black' } = this.props;
    const svg = this.border;
    const rc = rough.svg(svg);

    const node = rc.rectangle(width*0.05, height*0.05, width*0.9, height*0.9, {
      stroke: strokeColor,
      roughness: 1.5,
      strokeWidth: 3
    });
    (svg as any).appendChild(node);
  };

  render() {
    const { width = 100, height = 60, handleClick, style } = this.props;
    const theme = { width, height };

    return (
      <ThemeProvider theme={theme}>
        <Wrapper className="wrapper" onClick={handleClick} style={style}>
          <svg className="border" ref={ele => (this.border = ele)} />
          {this.props.text}
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default RoughButton;


