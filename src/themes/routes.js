import React from 'react';
import PAGE_CODES from 'themes/register/PageCodes'
import Page from 'themes/helpers/Page';

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
    path: ROOT,
    exact: true,
    component: () => <Page pageCode={PAGE_CODES.HOME}/>,
  },
];
