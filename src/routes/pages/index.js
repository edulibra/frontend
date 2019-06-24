import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';

const EdulibraTheme = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ 'themes/edulibra'),
  loading: Loading,
});

export default {
  edulibra: EdulibraTheme,
};
