import Translate from 'i18n';

export default ($this) => {
  return [
    {
      title: Translate.t1('syllabus_content'),
      url: `/admin/syllabus/${$this.props.iid}/design`,
      icon: {
        position: 'left',
        type: 'bank',
      },
    },
    {
      title: Translate.t1('information'),
      url: `/admin/syllabus/${$this.props.iid}/info`,
      icon: {
        position: 'left',
        type: 'setting',
      },
    },
  ];
};
