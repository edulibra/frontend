import React from 'react';
import THEME from 'themes/pages/register';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';

const EdulibraRoadMap = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ 'themes/edulibra/pages/root-map'),
  loading: Loading,
});

export default {
  [THEME.EDULIBRA]: EdulibraRoadMap,
};
