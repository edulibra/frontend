import React from 'react';
import { t1 } from 'i18n';
import { Input, Icon } from 'antd';
import { fetchNode } from 'common';
import SelectElement from 'schema-form/elements/Select';


export default (($this) => {
  const documentData = $this.props.documentData || {};
  return [

    {
      label: t1('syllabus name'),
      name: 'name',
      colSpan: 16,
      component: Input,
      decoratorOption: { rules: [{ required: true, message: t1('syllabus name is required') }] },
      componentProps: {
        placeholder: t1('Enter syllabus name'),
      },
    },
    {
      label: t1('estimated study time'),
      name: 'estimatedTime',
      colSpan: 8,
      decoratorOption: { rules: [{ required: true, message: t1('estimated time is required!') }] },
      component: Input,
      componentProps: {
        placeholder: 'hhh:00 - total hour:second',
      },
    },

    {
      label: t1('category'),
      name: 'categoryIid',
      colSpan: 24,
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

  ];
});
