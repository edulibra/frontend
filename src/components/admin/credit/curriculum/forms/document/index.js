import React from 'react';
import { t1 } from 'i18n';
import { Icon, Input, message } from 'antd';
import FileUpload from 'schema-form/elements/file-upload';
import Select from 'schema-form/elements/Select';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';


const ReactPlayer = Loadable({
  loader: () => import(/* webpackChunkName: "schema-form/elements/richtext" */ 'schema-form/elements/player'),
  loading: Loading,
});

export default (($this, currentType) => {
  const lectureMaterialTypes = $this.props.lectureMaterialTypes || {};
  if (currentType.value !== (lectureMaterialTypes.video && lectureMaterialTypes.document.value)) {
    return [];
  }

  return [
    {
      name: 'documentType',
      colSpan: 24,

      decoratorOption: {
        rules: [{ required: true, message: t1(`${currentType.label} code is required`) }],
      },
      component: FileUpload,
      componentProps: {
        fileName: 'file',
        multiple: true,
        onChange(info) {
          const status = info.file.status;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        children: (<div>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text"> Click or drag file to this area to upload </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </div>),
      },
    },
  ];
});
