import Translate from 'i18n';

export default ($this) => {
  return [
    {
      title: Translate.t1('syllabus_content'),
      url: `/academy/course-management/${$this.props.iid}/syllabus`,
      icon: {
        position: 'left',
        type: 'bank',
      },
    },
    {
      title: Translate.t1('information'),
      url: `/academy/course-management/${$this.props.iid}/info`,
      icon: {
        position: 'left',
        type: 'setting',
      },
    },
    {
      title: Translate.t1('Manager learners'),
      url: `/academy/course-management/${$this.props.iid}/learners`,
      icon: {
        position: 'left',
        type: 'setting',
      },
    },
    {
      title: Translate.t1('payment'),
      url: `/academy/course-management/${$this.props.iid}/payment`,
      icon: {
        position: 'left',
        type: 'setting',
      },
    },
    {
      title: Translate.t1('activate'),
      url: `/academy/course-management/${$this.props.iid}/activate`,
      icon: {
        position: 'left',
        type: 'setting',
      },
    },
  ];
};
