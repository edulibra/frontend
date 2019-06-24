// disabling flowtype to keep this example super simple

import React, {Component} from 'react';
import Curriculum from './curriculum';
import RecursiveDragDrop from './recursive-drag-drop';
import {reorder, reorderAtRoot, flatCurriculum} from './common';
import {DragDropContext} from 'react-beautiful-dnd';
import './stylesheet.scss';
import uuid from 'uuid/'
import {t1} from "../../../i18n";
import LectureMaterialSchema from "../../../components/admin/credit.bu/syllabus-content/LectureMaterialSchema";
import FormGeneration from "../../GenerateForm";

export default class TreeDragAndDrop extends Component {

  constructor(props, context) {
    super(props, context);
    const {nodes, lastIndex} = flatCurriculum(Curriculum.learningItems, Curriculum.lectureMaterials);
    this.state = {nodes: [...nodes]};
  }

  isRoot(result) {
    const {destination, source} = result;
    if (!destination || !source || (destination.droppableId !== source.droppableId)) {
      return false;
    }
    return isNaN(parseFloat(destination.droppableId)) && !isFinite(destination.droppableId);
  }

  onDragEnd = (result) => {
    const {destination, source} = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    let nodes;
    if (this.isRoot(result)) {
      nodes = reorderAtRoot(this.state.nodes, source.index, destination.index);
    } else {
      nodes = reorder(
        this.state.nodes,
        source,
        destination,
      );
    }

    this.setState({nodes, dragging: false});
  }

  onDragStart = () => {
    this.setState({dragging: true});
  }


  render() {
    let nodes = this.state.nodes || [];
    const {nodeName, documentData, schema} = this.props;
    nodes = [...nodes];
    const i = 0;
    return (
      <div className="ui-drag-drop-root">
        <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
          <RecursiveDragDrop schema={schema} isDragging={this.state.dragging} treeNodes={nodes}/>
        </DragDropContext>

        <FormGeneration
          node={nodeName}
          {...this.props}
          nodeAction="create"
          submitLabel={(documentData && documentData.iid) ? t1('update') : t1('create')}
          formId={uuid()}
          schema={schema}
        />
      </div>
    );
  }
}
