import React from 'react';
import { t1 } from 'i18n';
import { Input } from 'antd';
import { getConfigByValueFromContext } from 'components/admin/credit.bu/common';
import OptionGroup from 'schema-form/elements/OptionGroup';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';
import VideoSchema from './forms/video';
import DocumentSchema from './forms/document';


const Richtext = Loadable({
  loader: () => import(/* webpackChunkName: "schema-form/elements/richtext" */ 'schema-form/elements/richtext'),
  loading: Loading,
});
const ReactPlayer = Loadable({
  loader: () => import(/* webpackChunkName: "schema-form/elements/richtext" */ 'schema-form/elements/player'),
  loading: Loading,
});

export default (($this) => {
  const lectureMaterialTypes = $this.props.lectureMaterialTypes || {};
  const documentData = $this.props.documentData || {};
  const lectureSrcsOptionData = Object.values(lectureMaterialTypes) || [];
  const lectureDefault = documentData.itemType || (lectureSrcsOptionData.length > 0 ? lectureSrcsOptionData[0].value : undefined);
  const currentType = getConfigByValueFromContext(lectureMaterialTypes, $this.props.form.getFieldValue('itemType') || lectureDefault);

  return [

    {
      label: t1('lecture type'),
      name: 'itemType',
      colSpan: 24,
      component: OptionGroup,
      decoratorOption: {
        rules: [{ required: true, message: t1('type is required') }],
        initialValue: lectureDefault,
      },
      componentProps: {
        options: {
          value: 'value',
          label: 'label',
          data: Object.values(lectureMaterialTypes),
        },
      },
    },
    {
      label: t1(`${currentType.label} name`),
      name: 'name',
      colSpan: 24,
      decoratorOption: { rules: [{ required: true, message: t1(`${currentType.label} name is required`) }] },
      component: Input,
      componentProps: {
        placeholder: t1(`${currentType.label} name`),
      },
    },
    ...VideoSchema($this, currentType),
    ...DocumentSchema($this, currentType),
  ];
});
