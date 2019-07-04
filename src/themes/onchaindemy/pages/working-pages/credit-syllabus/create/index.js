import React from 'react';
import SyllabusSchema from './NewSyllabusSchema';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import {Modal} from 'antd';
import FormGeneration from 'schema-form/GenerateForm';
import {t1} from 'i18n';

class SyllabusDetail extends React.PureComponent {

  render() {
    const {history, showDialog, onClose} = this.props;
    return (
      <Modal
        title="Create new syllabus"
        maskClosable
        footer={null}
        onCancel={onClose}
        visible={showDialog}>

        <FormGeneration
          node='syllabus'
          onSuccess={(org) => {
            if (org.iid) {
              history.push(`/admin/syllabus/${org.iid}/design`);
            }
          }}
          nodeAction="create"
          submitLabel={t1('create new syllabus')}
          formId={uuid()}
          schema={SyllabusSchema}/>

      </Modal>
    );
  }
}

SyllabusDetail.propTypes = {
  showDialog: PropTypes.bool
}

export default SyllabusDetail;
