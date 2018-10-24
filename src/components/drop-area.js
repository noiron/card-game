/**
 * 定义可以出牌的区域
 */
import React from 'react';
import { DropTarget } from 'react-dnd';
import { item_types } from '../constants';

const dropTarget = {
  drop() {
    console.log('你出了一张牌');
    return { name: 'card'}
  }
}

@DropTarget(
  item_types.card,
  dropTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
  })
)
class DropArea extends React.Component {
  render() {
    const { connectDropTarget, canDrop, isOver } = this.props;

    return (
      connectDropTarget && connectDropTarget(
        <div>
          {this.props.children}
        </div>
      )
    )
  }
}

export default DropArea;