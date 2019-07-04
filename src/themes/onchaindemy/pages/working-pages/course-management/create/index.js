import React from 'react';
import NewCourseSchema from './NewCourseSchema';
import uuid from 'uuid/v4';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal} from 'antd';
import FormGeneration from 'schema-form/GenerateForm';
import {t1} from 'i18n';

class CreateCourse extends React.PureComponent {

  render() {
    console.log('this.propsthis.propsthis.props', this.props);

    const {history, showDialog, onClose} = this.props;
    return (
      <Modal
        title={t1("Create new course")}
        maskClosable
        footer={null}
        onCancel={onClose}
        visible={showDialog}>

        <FormGeneration
          node='course'
          onSuccess={(org) => {
            if (org.iid) {
              history.push(`/admin/syllabus/${org.iid}/design`);
            }
          }}
          nodeAction="create"
          submitLabel={t1('create new course')}
          formId={uuid()}
          schema={NewCourseSchema}/>

      </Modal>
    );
  }
}

CreateCourse.propTypes = {
  showDialog: PropTypes.bool
}

export default connect()(CreateCourse);
