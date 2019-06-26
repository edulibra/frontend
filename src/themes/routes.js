import React from 'react';
import PAGE_CODES from 'themes/register/PageCodes'
import Page from 'themes/helpers/Page';

const ROOT = '';

export default [
  {
    path: ROOT,
    exact: true,
    component: () => <Page pageCode={PAGE_CODES.HOME}/>,
  },
];
