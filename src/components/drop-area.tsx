/**
 * 定义可以出牌的区域
 */
import React from 'react';
import { DropTarget, DropTargetMonitor, ConnectDropTarget } from 'react-dnd';
import { item_types } from '../constants';
// import { toJS } from 'mobx';

const dropTarget = {
  drop(props: IDropAreaProps, monitor: DropTargetMonitor) {
    const card = monitor.getItem();
    if (card.usable) {
      card.playCard();
      console.log('你出了一张牌');
    }
    return { name: 'card' }
  }
}

interface IDropAreaProps {
  // connectDropTarget?: ConnectDropTarget;
  // canDrop?: boolean;
  // isOver?: boolean;
  children: JSX.Element[];
}

export interface IDropAreaCollectedProps {
	canDrop: boolean
	isOver: boolean
	connectDropTarget?: ConnectDropTarget
}

class DropArea extends React.Component<IDropAreaProps & IDropAreaCollectedProps> {
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

export default DropTarget<IDropAreaProps, IDropAreaCollectedProps>(
  item_types.card,
  dropTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
  })
)(DropArea);