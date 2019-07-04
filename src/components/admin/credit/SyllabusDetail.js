import React from 'react';
import SyllabusSchema from './SyllabusSchema';
import uuid from 'uuid/v4';
import detailMenuSchema from './detail-menu-schema';
import FormGeneration from 'schema-form/GenerateForm';
import PopupScreenMenu from 'schema-form/helper/overlay-helper/PopupScreenMenu';
import connect from 'react-redux/es/connect/connect';
import { t1 } from 'i18n';
import { fetchNode } from 'common';

const node = 'syllabus';

class SyllabusDetail extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = async () => {
   const syllabus = await fetchNode(node);
   this.setState({syllabus})
  }

  render() {
    const { popupScreenId, history, documentData } = this.props;
    return (
      <div>
        <PopupScreenMenu schema={detailMenuSchema(this)} namespace={popupScreenId} />
        <FormGeneration
          {...this.props}
          node={node}
          documentData={this.state.syllabus}
          onSuccess={(org) => {
            if (org.iid) {
              history.push(`/admin/syllabus/${org.iid}/design`);
            }
          }}
          nodeAction="create"
          submitLabel={(documentData && documentData.iid) ? t1('update organization') : t1('create organization')}
          formId={uuid()}
          schema={SyllabusSchema}
        />
      </div>
    );
  }
}

export default SyllabusDetail;
