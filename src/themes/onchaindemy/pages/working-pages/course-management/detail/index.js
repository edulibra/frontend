import React from 'react';
import NewCourseSchema from './NewCourseSchema';
import uuid from 'uuid/v4';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PopupScreenMenu from "schema-form/helper/overlay-helper/PopupScreenMenu";
import detailMenuSchema from "./detail-menu-schema";
import actionCommon from "action-creators/common";
import LectureMaterialSchema from "../../../../../../components/admin/credit/curriculum/LectureMaterialSchema";
import TreeViewDragAndDrop from "../../../../../../schema-form/elements/treeview-drag-and-drop";
import FetchNode from "../../../../../../common/FetchData";
import endpoint from "../../../../../../configs/endpoints";

const courseViewId = 'courseDetailId'

class Curriculum extends React.PureComponent {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(actionCommon.setStatusOfFormView({viewId: courseViewId, title: 'Course name fadfads'}));
  }

  render() {

    const {history, showDialog, onClose, courseDetail} = this.props;
    const learningMaterials = courseDetail && courseDetail.syllabus && courseDetail.syllabus.learningMaterials
    console.log('this.props', this.props);
    return (
      <div>
        <PopupScreenMenu schema={detailMenuSchema(this)} namespace={courseViewId}/>
        <TreeViewDragAndDrop
          lectureMaterialTypes={this.props.lectureMaterialTypes}
          hostedTypes={this.props.hostedTypes}
          nodes={learningMaterials}
          schema={LectureMaterialSchema}
        />
      </div>
    )
  }
}

Curriculum.propTypes = {
  showDialog: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    lectureMaterialTypes: state.context.lectureMaterialTypes,
    hostedTypes: state.context.hostedTypes,
  };
};
export default FetchNode({url: endpoint.syllabus.detail, name: 'courseDetail'})(connect(mapStateToProps)(Curriculum));
