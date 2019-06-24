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
  if (currentType.value !== (lectureMaterialTypes.video && lectureMaterialTypes.video.value)) {
    return [];
  }

  const hostedTypes = $this.props.hostedTypes || {};
  const documentData = $this.props.documentData || {};

  const videoSrcsOptionData = Object.values(hostedTypes) || [];
  const lectureSrcsDefault = documentData.hostedType || (videoSrcsOptionData.length > 0 ? videoSrcsOptionData[0].value : undefined);
  const videoUrl = $this.props.form.getFieldValue('videoUrl');
  const hostedType = $this.props.form.getFieldValue('hostedType');
  const isCDNType = hostedType === (hostedTypes && hostedTypes.localCDN && hostedTypes.localCDN.value);

  return [
    {
      name: 'hostedType',
      colSpan: 4,
      component: Select,
      decoratorOption: {
        rules: [{ required: true, message: t1('type is required') }],
        initialValue: lectureSrcsDefault,
      },
      componentProps: {
        options: {
          value: 'value',
          label: 'label',
          data: Object.values(hostedTypes),
        },
      },
    },
    {
      name: 'videoUrl',
      colSpan: 14,
      decoratorOption: {
        rules: [{ required: !isCDNType, message: t1('videoUrl code is required') }],
      },
      component: Input,
      componentProps: {
        placeholder: t1('Video Id'),
        disabled: isCDNType,
      },
    },
    {
      name: 'uploadVideo',
      colSpan: 24,
      hidden: hostedType !== (hostedTypes && hostedTypes.localCDN.value),
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
    {
      name: 'videoQuestions',
      colSpan:
        24,
      component:
      ReactPlayer,
      componentProps:
      {
        style: {
          display: videoUrl ? 'block' : 'none',
        },
        url: videoUrl,
        playing:
            true,
        height:
            250,
        width:
            400,
      },
    },
  ];
});
