import React from 'react';
import { t1 } from 'i18n';
import { Input, Icon } from 'antd';
import { fetchNode } from 'common';
import Validators from 'common/validate';
import SelectElement from 'schema-form/elements/Select';
import Loadable from 'react-loadable';
import Loading from '../../common/viewers/loading';

const Richtext = Loadable({
  loader: () => import(/* webpackChunkName: "schema-form/elements/richtext" */ 'schema-form/elements/richtext'),
  loading: Loading,
});

export const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

export default (($this) => {
  const documentData = $this.props.documentData || {};
  return [

    {
      label: t1('syllabus name'),
      name: 'name',
      colSpan: 12,
      component: Input,
      decoratorOption: { rules: [{ required: true, message: t1('syllabus name is required') }] },
      componentProps: {
        placeholder: t1('Enter syllabus name'),
      },
    },
    {
      label: t1('syllabus code'),
      name: 'code',
      colSpan: 6,
      decoratorOption: { rules: [{ required: true, message: t1('syllabus code is required') }] },
      component: Input,
      componentProps: {
        placeholder: t1('syllabus code'),
      },
    },
    {
      label: t1('estimated time'),
      name: 'estimatedTime',
      colSpan: 3,
      decoratorOption: { rules: [{ required: true, message: t1('estimated time is required!') }] },
      component: Input,
      componentProps: {
        placeholder: 'Enter estimated time',
      },
    },
    {
      label: t1('credit number'),
      name: 'credit',
      colSpan: 3,
      decoratorOption: { rules: [{ required: true, message: t1('Short name is required!') }] },
      component: Input,
      componentProps: {
        placeholder: 'Enter short name',
      },
    },

    {
      label: t1('category'),
      name: 'categoryIid',
      colSpan: 12,
      component: SelectElement,
      componentProps: {
        placeholder: t1('category'),
        showSearch: true,
        suffixIcon: <Icon type="search" />,
        defaultActiveFirstOption: false,
        // showArrow: false,
        filterOption: false,
        onSearch: async (input) => await fetchNode('organization', { _q: input }),
        notFoundContent: null,
        options: {
          value: 'iid',
          label: 'name',
          data: [documentData.parentOrg],
        },
      },
    },

    {
      label: t1('organization'),
      name: 'orgIid',
      colSpan: 12,
      component: SelectElement,
      componentProps: {
        placeholder: t1('organization'),
        showSearch: true,
        suffixIcon: <Icon type="search" />,
        defaultActiveFirstOption: false,
        // showArrow: false,
        filterOption: false,
        onSearch: async (input) => await fetchNode('organization', { _q: input }),
        notFoundContent: null,
        options: {
          value: 'iid',
          label: 'name',
          data: [documentData.parentOrg],
        },
      },
    },

    {
      label: t1('Introduction'),
      name: 'introduction',
      colSpan: 24,
      component: Richtext,
      componentProps: {
        rows: 4,
        placeholder: 'Enter the notes',
      },
    },

  ];
});
