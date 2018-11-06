/**
 * 当用户 hover 在卡牌上时，显示额外的描述信息
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

class CardDesc extends React.Component {
  public props: {
    info: string;
  };

  public render() {
    const { info } = this.props; 

    return (
      <Wrapper>{info}</Wrapper>
    )
  }
}

// CardDesc.propTypes = {
//   info: PropTypes.string.isRequired,
// }

const Wrapper = styled.div`
  width: 120%;
  height: 120%;
  padding-top: 5px;
  position: absolute;
  top: 0%;
  left: 115%;
  background-color: #fff;
  border: 1px solid #999;
  box-shadow: 2px 2px 2px #aaa;
  border-radius: 5px;
  z-index: 10;
`;

export default CardDesc;


