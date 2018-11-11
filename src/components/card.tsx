import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, ConnectDragSource } from 'react-dnd';
import { item_types } from '../constants';
import CardView from './card-view';

const cardSource = {
  beginDrag(card: ICardProps) {
    console.log('begin drag: ');
    return ({ 
      id: card.id,
      playCard: card.playCard
    })
  },

  // endDrag(props) {
  //   props.playCard();
  // }
}


interface ICardProps {
  connectDragSource: ConnectDragSource;
  id: string;
  name: string;
  desc: string;
  attack: number;
  armor: number;
  playCard: any;  // FIXME:
  children: any;
}

@DragSource(
  item_types.card,
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)
class Card extends Component<ICardProps> {

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

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   attack: PropTypes.number,
//   armor: PropTypes.number,
// }

export default Card;
