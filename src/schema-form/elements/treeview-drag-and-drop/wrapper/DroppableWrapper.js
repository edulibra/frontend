import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getListStyle } from '../common';
import { Droppable } from 'react-beautiful-dnd';
import DraggableWrapper from './DraggableWrapper';

export default class DroppableWrapper extends Component {
  state = {};
  static propTypes = {
    // overflow: PropTypes.string,
  };
  static defaultProps = {
    // overflow: 'auto',ui-drop-panel
  };

  render() {
    const node = this.props.node || {};
    const type = this.props.type;
    const { onMouseEnter, onMouseLeave } = this.props;
    const droppableId = node.iid || this.props.droppableId;

    return (
      <Droppable droppableId={droppableId} type={type}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={'ui-droppable-control'}
            ref={droppableProvided.innerRef}
            style={getListStyle(
              droppableSnapshot.isDraggingOver,
              this.props.overflow,
            )}
            onScroll={(e) => console.log('current scrollTop', e.currentTarget.scrollTop)}
          >
            {this.props.children}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>);
  }
}

DroppableWrapper.propTypes = {
  node: PropTypes.object,
  droppableId: PropTypes.string,
};
