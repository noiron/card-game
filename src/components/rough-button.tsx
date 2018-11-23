import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import RoughBox from './rough-box';

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
`;

class RoughButton extends React.Component<IButtonProps> {

  render() {
    const { width = 100, height = 60, handleClick, style } = this.props;
    const theme = { width, height };

    return (
      <ThemeProvider theme={theme}>
        <Wrapper onClick={handleClick} style={style}>
          <RoughBox width={width} height={height} roughness={1.5} strokeWidth={2} />
          {this.props.text}
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default RoughButton;


