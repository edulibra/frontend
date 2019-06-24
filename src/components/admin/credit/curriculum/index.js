import React from 'react';
import {t1} from 'i18n';
import {connect} from 'react-redux';
import endpoint from 'configs/endpoints';
import PopupScreenMenu from 'schema-form/helper/overlay-helper/PopupScreenMenu';
import TreeViewDragAndDrop from 'schema-form/elements/treeview-drag-and-drop';
import topMenuSchema from '../menu/top-menu';
import './stylesheet.scss';
import Menu from 'layouts/common/menu';
import {history} from 'store';
import FetchNode from 'common/FetchNodeHigherComponent';
import LectureMaterialSchema from './LectureMaterialSchema';
import menuSchema from 'layouts/admin/menu-left/menu-schema';
import FormGeneration from "../../../../schema-form/GenerateForm";

class Curriculum extends React.PureComponent {
  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps.documentData);
  }

  render() {
    return (
      <div className="ui-curriculum-panel">
        {/* <PopupScreenMenu schema={topMenuSchema(this)} namespace={this.props.popupScreenId}/>*/}
        <div className="ui-curriculum-menu">
          <Menu
            className="ui-admin-left-menu"
            mode="inline"
            selectedKeys={[history.location.pathname]}
            schema={topMenuSchema(this)}
          />
        </div>

        <div className="ui-curriculum-content">
          <TreeViewDragAndDrop
            lectureMaterialTypes={this.props.lectureMaterialTypes}
            hostedTypes={this.props.hostedTypes}
            nodes={this.props.documentData.learningMaterials}
            schema={LectureMaterialSchema}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lectureMaterialTypes: state.context.lectureMaterialTypes,
    hostedTypes: state.context.hostedTypes,
  };
};
export default connect(mapStateToProps)(FetchNode({url: endpoint.syllabus.detail})(Curriculum));
