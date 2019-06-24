import React from 'react';
import THEME from 'themes/pages/register';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';

const EdulibraHome = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ 'themes/edulibra/pages/home'),
  loading: Loading,
});

export default {
  [THEME.EDULIBRA]: EdulibraHome,
};
