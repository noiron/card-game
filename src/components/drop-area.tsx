/**
 * 定义可以出牌的区域
 */
import React from 'react';
import { DropTarget, DropTargetMonitor, ConnectDropTarget } from 'react-dnd';
import { item_types } from '../constants';
// import { toJS } from 'mobx';

const dropTarget = {
  drop(props: IProps, monitor: DropTargetMonitor) {
    const card = monitor.getItem();
    card.playCard();
    console.log('你出了一张牌');
    return { name: 'card' }
  }
}

interface IProps {
  connectDropTarget: ConnectDropTarget;
  canDrop: boolean;
  isOver: boolean;
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
class DropArea extends React.Component<IProps> {
  render() {
    // eslint-disable-next-line
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