import React from 'react';
import connect from 'react-redux/es/connect/connect';
import 'react-sortable-tree/style.scss';
import { t1 } from 'i18n';
import {
  resetTreeLevel,
  addTreeNodeLevel,
  getTreeDataToStoreToServer,
  getLectureMaterialIdsAndIids,
  buildTreeDataFromLearningMaterial,
  setTreeDataWithSelectedNode,
} from '../common/Tree';
import Empty from './common/Empty';
import uuid from 'uuid/v4';
import { updateNode } from 'common';
import SyllabusTemplate from './templates/SyllabusTemplate';
import SortableTree from 'react-sortable-tree';
import { getLectureMaterialByIids } from 'components/admin/credit.bu/common/LectureMaterial';
import Item from './items';
import PopupScreenMenu from 'schema-form/helper/overlay-helper/PopupScreenMenu';
import detailMenuSchema from '../detail-menu-schema';
import './stylesheet.scss';
import EditLearningMaterialContainer from './EditLearningMaterialContainer';

class OrgForm extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      treeData: [],
    };
  }

  componentDidMount = async () => {
    const syllabus = this.props.syllabus || {};
    const { learningItems } = syllabus;
    const learningIidAndId = getLectureMaterialIdsAndIids(learningItems); // {iid: id}
    const learningItemIids = Object.keys(learningIidAndId);
    if (learningItemIids.length > 0) {
      const learningMaterials = await getLectureMaterialByIids(learningItemIids);
      const treeData = buildTreeDataFromLearningMaterial(learningItems, learningMaterials, this.onLearningItemSelected);
      this.setState({ treeData });
    }
  }

  onLearningItemSelected = (node) => {
    let treeData = this.state.treeData || [];
    treeData = setTreeDataWithSelectedNode(treeData, node.iid);
    this.setState({ treeData, editingNode: node });
  }

  onMoveNode = async (dataNode) => {
    const { syllabus } = this.props;
    const dataTree = [...dataNode.treeData] || [];
    const treeData = resetTreeLevel(dataTree, this.onLearningItemSelected);
    const learningItems = getTreeDataToStoreToServer(treeData);
    await updateNode('syllabus', { iid: syllabus.iid, learningItems });
    this.setState({ treeData });
  }

  getNodeKey = ({ node }) => {
    return node.iid;
  }

  getSyllabusDetail = (syllabus) => {
    const { learningItems } = syllabus;
    return this.state.treeData;
    if (!learningItems || learningItems.length === 0) {
      return [];
    }
    return learningItems;
  }

  onCreatedLearningMaterial = async (node, parentNode) => {
    const { treeData } = this.state;
    const { syllabus } = this.props;
    console.log('this.propsthis.propsthis.props', this.props);
    const newTreeData = addTreeNodeLevel(treeData, node, this.onLearningItemSelected);
    syllabus.learningItems = getTreeDataToStoreToServer(treeData);
    await updateNode('syllabus', { iid: syllabus.iid, learningItems: syllabus.learningItems });
    this.setState({ treeData: [...newTreeData] });
  }

  onUpdatedLearningMaterial = (item) => {
    console.log(item);
  }

  resetForm = () => {
    let treeData = this.state.treeData || [];
    treeData = setTreeDataWithSelectedNode(treeData, -1);
    this.setState({ treeData, editingNode: undefined });
  }

  render() {
    const syllabus = this.props.syllabus || {};
    // const learningItems = this.getSyllabusDetail(syllabus);
    const treeView = (<div className="ui-tree-panel">
      <SortableTree
        key={uuid()}
        rowHeight={45}
        getNodeKey={this.getNodeKey}
        onMoveNode={this.onMoveNode}
        treeData={this.state.treeData}
        onChange={(treeData) => this.setState({ treeData })}
      />
      <Empty iid={this.props.iid} render={this.state.treeData.length === 0} />
    </div>);

    return (
      <div className="ui-admin-syllabus" style={{ height: '500px' }}>
        <PopupScreenMenu schema={detailMenuSchema(this)} namespace={this.props.popupScreenId} />
        {
          this.props.routeParams.action === 'edit' &&
          <div className="ui-edit-mode">
            {treeView}
            <EditLearningMaterialContainer
              onResetForm={this.resetForm}
              documentData={this.state.editingNode}
              onCreatedLearningMaterial={this.onCreatedLearningMaterial}
              onUpdatedLearningMaterial={this.onUpdatedLearningMaterial}
              className="ui-edit-content" syllabusIid={this.props.iid}
            />
          </div>
        }
        {
          this.props.routeParams.action !== 'edit' &&
          treeView
        }
      </div>
    );
  }
}

export default connect()(OrgForm);
