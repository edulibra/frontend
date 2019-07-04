import React, {Component} from 'react';
import {Icon} from 'antd';
import DraggableWrapper from './wrapper/DraggableWrapper';
import DroppableWrapper from './wrapper/DroppableWrapper';
import {DragDropContext} from 'react-beautiful-dnd';

export default class RecursiveDragDrop extends Component {

  state = {focusing: false};

  onMouseEnter = (event) => {
    const node = this.props.node || {};
    this.setState({focusing: true, focusingNode: node});
  }

  onMouseLeave = (event) => {
    this.setState({focusing: false, focusingNode: undefined});
  }

  render() {
    const treeNodes = this.props.treeNodes || [];
    const node = this.props.node || {};
    const {isDragging, onStartCreateNewMaterial} = this.props;
    const draggableId = node.iid || 'draggableId';
    const type = this.props.type || 'firstChild';
    const level = this.props.level || 1;
    return (
      <div
        className={'ui-recursive-panel'}
        onMouseEnter={() => this.onMouseEnter(node.iid)}
        onMouseLeave={() => this.onMouseLeave(node.iid)}
      >
        <DroppableWrapper
          droppableId={`${draggableId}`} type={`tree_${level}`} onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          {
            treeNodes.map((node, index) => (
              <div className={`${node.children && node.children.length > 0 ? 'ui-drop-panel' : ''}`} key={node.iid}>
                <DraggableWrapper node={node} index={index}>
                  {node.children && node.children.length > 0 && (
                    <RecursiveDragDrop onStartCreateNewMaterial={onStartCreateNewMaterial} isDragging={isDragging} node={node} treeNodes={node.children} level={level + 1}/>
                  )}
                </DraggableWrapper>
              </div>
            ))
          }
          <div className={`ui-content-control  ${!isDragging && this.state.focusing ? '' : 'display-none1'}`}>
            <span onClick={onStartCreateNewMaterial}>
              <Icon className="ui-control-item" type="play-circle"/>
            </span>
            <span onClick={onStartCreateNewMaterial}>
              <Icon className="ui-control-item" type="file-text"/>
            </span>
            <span onClick={onStartCreateNewMaterial}>
              <Icon className="ui-control-item" type="container"/>
            </span>
            <span onClick={onStartCreateNewMaterial}>
             <Icon className="ui-control-item" type="file-pdf"/>
            </span>
            <span onClick={onStartCreateNewMaterial}>
              <Icon className="ui-control-item" type="question-circle"/>
            </span>
          </div>

        </DroppableWrapper>
      </div>
    );
  }
}
