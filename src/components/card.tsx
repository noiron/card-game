import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, ConnectDragSource } from 'react-dnd';
import { item_types, PlayerType } from '../constants';
import CardView from './card-view';
import CardBack from './card-back';

const cardSource = {
  beginDrag(card: ICardProps) {
    console.log('begin drag: ');
    return ({ 
      id: card.id,
      playCard: card.playCard,
      usable: card.usable,
    })
  },

  // endDrag(props) {
  //   props.playCard();
  // }
}


interface ICardProps {
  id: string;
  name: string;
  desc: string;
  attack: number;
  source: PlayerType;
  armor: number;
  mana: number;
  playCard: () => any;
  children?: any;
  extraInfo: string;
  usable: boolean;
  showCardBack?: boolean;
}

interface ICardCollectedProps {
  connectDragSource: ConnectDragSource;
}
class Card extends Component<ICardProps & ICardCollectedProps> {

  handleDoubleClick = () => {
    this.props.playCard();
  }

  render() {
    const { connectDragSource, showCardBack, ...cardProps } = this.props;

    if (showCardBack) {
      return <CardBack {...cardProps} />;
    }

    return (
      connectDragSource && connectDragSource(<div className="card">
        <CardView {...cardProps} />
      </div>)
    )
  }
}

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   attack: PropTypes.number,
//   armor: PropTypes.number,
// }

export default DragSource<ICardProps, ICardCollectedProps>(
  item_types.card,
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(Card);
