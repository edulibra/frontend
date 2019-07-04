import React from 'react';
import PAGE_CODES from 'themes/register/PageCodes'
import Page from 'themes/helpers/Page';
import SubMainLayoutHelper from "../layouts/helpers/SubMainLayoutHelper";
import PopoverSubLayoutHelper from "../layouts/helpers/PopoverSubLayoutHelper";
import {t1} from "../i18n";

const ROOT = '';

export default [
  {
    path: `${ROOT}/roadmap`,
    exact: true,
    component: () => <Page pageCode={PAGE_CODES.ROAD_MAP}/>,
  },
  {
    path: `${ROOT}/onchaindemy`,
    exact: true,
    component: () => <Page pageCode={PAGE_CODES.ONCHAINDEMY_PAGE}/>,
  },
  {
    path: `${ROOT}/white-paper`,
    exact: true,
    component: () => <Page pageCode={PAGE_CODES.WHITE_PAPER}/>,
  },
  {
    path: `${ROOT}/academy/course-management`,
    component: PopoverSubLayoutHelper,
    defaultComponent: () => <Page pageCode={PAGE_CODES.COURSE_MANAGEMENT}/>,
    popupScreenId:'courseDetailId',
    routes: [
      {
        path: `${ROOT}/academy/course-management/:iid`,
        exact: true,
        isNewRoute: true,
        component: () => <Page pageCode={PAGE_CODES.COURSE_DETAIL}/>,
      }
    ]
  },
  {
    path: `${ROOT}/academy/credit-syllabus`,
    component: PopoverSubLayoutHelper,
    defaultComponent: () => <Page pageCode={PAGE_CODES.CREDIT_SYLLABUS_LIST}/>,
    routes: [
      {
        path: `${ROOT}/academy/credit-syllabus/detail`,
        exact: true,
        isNewRoute: true,
        title: t1('create new syllabus'),
        component: () => <Page pageCode={PAGE_CODES.CREDIT_SYLLABUS_DETAIL}/>,
      }
    ]
  },
  {
    path: ROOT,
    exact: true,
    component: () => <Page pageCode={PAGE_CODES.HOME}/>,
  },
];
