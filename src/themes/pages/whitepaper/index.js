import React from 'react';
import THEME from 'themes/pages/register';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';

const whitepaper = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ 'themes/edulibra/pages/whitepaper'),
  loading: Loading,
});

export default {
  [THEME.EDULIBRA]: whitepaper,
};
