import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';

const EdulibraHome = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ 'themes/edulibra/pages/about-us'),
  loading: Loading,
});

export default {
  edulibra: EdulibraHome,
};
