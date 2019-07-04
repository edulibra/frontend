// disabling flowtype to keep this example super simple

import React, {Component} from 'react';
import Curriculum from './curriculum';
import RecursiveDragDrop from './recursive-drag-drop';
import {reorder, reorderAtRoot, flatCurriculum} from './common';
import {DragDropContext} from 'react-beautiful-dnd';
import './stylesheet.scss';
import uuid from 'uuid/'
import {t1} from "../../../i18n";
import {connect} from 'react-redux';
import FormGeneration from "../../GenerateForm";
import OverlayHelper from "../../helper/overlay-helper";
import {Icon} from "antd";
import {renderRoutes} from "react-router-config";
import actionCommon from "../../../action-creators/common";

const addLearningMaterialViewId = 'addLearningMaterialViewId';

class TreeDragAndDrop extends Component {

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

  onStartCreateNewMaterial = () => {
    const {dispatch} = this.props;
    console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
    dispatch(actionCommon.setStatusOfFormView({viewId: addLearningMaterialViewId, display: true}));
  }


  render() {
    let nodes = this.state.nodes || [];
    const {nodeName, documentData, schema} = this.props;
    nodes = [...nodes];
    const i = 0;
    return (
      <div className="ui-drag-drop-root">
        <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
          <RecursiveDragDrop onStartCreateNewMaterial={this.onStartCreateNewMaterial}
                             schema={schema}
                             isDragging={this.state.dragging}
                             treeNodes={nodes}/>
        </DragDropContext>

        <OverlayHelper viewId='addLearningMaterialViewId'
                       backIcon={<Icon type="rollback"/>}
                       className='ui-onchanedemy-drawer'
                       placement='bottom'
                       hideNewButton={true}>
          <FormGeneration
            node={nodeName}
            {...this.props}
            nodeAction="create"
            submitLabel={(documentData && documentData.iid) ? t1('update') : t1('create')}
            formId={uuid()}
            schema={schema}
          />
        </OverlayHelper>

      </div>
    );
  }
}

export default connect()(TreeDragAndDrop)
