import { t1 } from 'i18n';
import { Input } from 'antd';
import SelectElement from 'schema-form/elements/Select';

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
  return [
    {
      label: t1('input search data'),
      name: 'searchData',
      colSpan: 12,
      component: Input,
      componentProps: {
        placeholder: t1('code, name, type'),
      },
    },
    {
      label: t1('created_by'),
      name: 'createdBy',
      colSpan: 8,
      component: SelectElement,
      componentProps: {
        placeholder: t1('Enter the service learningMaterialTypesLecture'),
        filterOption: false,
        options: {
          value: 'bankName',
          label: 'bankName',
          data: $this.props.bankings,
        },
      },
    },
    {
      label: 'status',
      name: 'status',
      colSpan: 4,
      component: SelectElement,
      componentProps: {
        placeholder: 'select status',
        filterOption: false,
        options: {
          value: 'bankName',
          label: 'bankName',
          data: $this.props.bankings,
        },
      },
    },

  ];
});
