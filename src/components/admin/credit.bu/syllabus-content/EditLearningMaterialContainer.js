import React from 'react';
import { Button } from 'antd';
import 'react-sortable-tree/style.scss';
import './stylesheet.scss';
import { t1 } from 'i18n';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import LectureMaterialSchema from './LectureMaterialSchema';
import FormGeneration from 'schema-form/GenerateForm';

const node = 'lecture_material';

class EditLearningMaterialContainer extends React.PureComponent {

  render() {
    const { documentData, className, onCreatedLearningMaterial, onUpdatedLearningMaterial, onResetForm } = this.props;
    const resetButton = documentData && documentData.iid ? <Button className="m-l-20" type="primary" onClick={onResetForm}>{t1('create new one')}</Button> : '';
    return (
      <div className={`ui-admin-syllabus ${className}`}>
        <FormGeneration
          node={node}
          documentData={documentData}
          lectureMaterialTypes={this.props.lectureMaterialTypes}
          hostedTypes={this.props.hostedTypes}
          hiddenFields={{
            syllabusIid: parseInt(this.props.syllabusIid),
          }}
          rightSummitBtn={resetButton}
          onSuccess={onCreatedLearningMaterial}
          nodeAction="create"
          submitLabel={(documentData && documentData.iid) ? t1('update') : t1('create')}
          formId={uuid()}
          schema={LectureMaterialSchema}
        />
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

export default connect(mapStateToProps)(EditLearningMaterialContainer);
