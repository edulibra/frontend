import React from 'react';
import SubMainLayoutHelper from 'layouts/helpers/SubMainLayoutHelper';
import { LayoutRegistered } from 'layouts/LayoutHelper';
import PopoverSubLayoutHelper from 'layouts/helpers/PopoverSubLayoutHelper';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';


const creditList = Loadable({
  loader: () => import(/* webpackChunkName: "Permission" */ 'components/admin/credit.bu'),
  loading: Loading,
});

const creditForm = Loadable({
  loader: () => import(/* webpackChunkName: "Permission" */ 'components/admin/credit.bu/SyllabusDetail'),
  loading: Loading,
});

const creditDesign = Loadable({
  loader: () => import(/* webpackChunkName: "Permission" */ 'components/admin/credit.bu/SyllabusDetail'),
  loading: Loading,
});
const DesignSyllabusContent = Loadable({
  loader: () => import(/* webpackChunkName: "Permission" */ 'components/admin/credit.bu/syllabus-content'),
  loading: Loading,
});


export default (root) => {
  return {
    path: `${root}/syllabus`,
    component: PopoverSubLayoutHelper,
    popupScreenId: 'creditModule',
    showNewButton: true,
    defaultComponent: creditList,
    routes: [
      {
        path: `${root}/syllabus/new`,
        exact: true,
        isNewRoute: true,
        component: creditForm,
      },
      {
        path: `${root}/syllabus/:iid(\\d+)/design`,
        exact: true,
        component: DesignSyllabusContent,
        autoFetch: {
          method: 'GET',
          params: {
            node: 'syllabus',
          },
        },
      },
      {
        path: `${root}/syllabus/:iid(\\d+)/design/:action`,
        exact: true,
        component: DesignSyllabusContent,
        autoFetch: {
          method: 'GET',
          params: {
            node: 'syllabus',
          },
        },
      },
      {
        path: `${root}/syllabus/:iid(\\d+)/info`,
        exact: true,
        component: creditForm,
        autoFetch: {
          method: 'GET',
          params: {
            node: 'syllabus',
          },
        },
      },

    ],
  };
};
