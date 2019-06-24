import React from 'react';
import THEME from 'themes/pages/register';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';

const onchaindemy = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ 'themes/edulibra/pages/onchaindemy'),
  loading: Loading,
});

export default {
  [THEME.EDULIBRA]: onchaindemy,
};
