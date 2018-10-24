import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { item_types } from '../constants';
import CardView from './card-view';

const cardSource = {
  beginDrag(props) {
    console.log('begin drag: ', props);
    return { id: props.index }
  },

  endDrag(props) {
    props.playCard();
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
    const { connectDragSource, ...cardProps } = this.props;

    return (
      connectDragSource && connectDragSource(<div>
        <CardView {...cardProps} />
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
