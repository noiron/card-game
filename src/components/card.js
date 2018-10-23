import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { item_types } from '../constants';


const Wrapper = styled.div`
  width: 90px;
  height: 120px;
  border: 2px solid #000;
  text-align: center;
  font-size: 14px;
  user-select: none;
  border-radius: 8px;
  /* cursor: pointer; */

  p {
    margin: 0;
    margin-bottom: 10px;
  }

  .name {
    font-size: 20px;
    margin-bottom: 10%;
  }

  .desc.emoji {
      font-size: 36px;
    }
`;

const cardSource = {
  beginDrag(props) {
    console.log('begin drag: ', props);
    return { id: props.index }
  }
}

@DragSource(
  item_types.card,
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)
class Card extends Component {

  handleDoubleClick = () => {
    this.props.playCard();
  }

  render() {
    const { name, desc, attack, armor, source, connectDragSource } = this.props;

    return (
      connectDragSource && connectDragSource(<div>
      <Wrapper className={"card " + source} onDoubleClick={this.handleDoubleClick}>
        <p className="name">{name}</p>
        <p className={desc.length <=2 ? 'desc emoji' : 'desc'}>{desc}</p>
        {attack > 0 && <p>攻击：{attack}</p>}
        {armor >0  && <p>护甲：{armor}</p>}
      </Wrapper>
      </div>
      )
    )
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  attack: PropTypes.number,
  armor: PropTypes.number,
}


export default Card;
