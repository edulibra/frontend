import React from 'react';
import ThemeCodes from 'themes/register/ThemeCodes'
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';

const onchaindemy = Loadable({
  loader: () => import(/* webpackChunkName: "themes.onchaindemy" */ 'themes/onchaindemy'),
  loading: Loading,
});

const edulibra = Loadable({
  loader: () => import(/* webpackChunkName: "themes.edulibra" */ 'themes/edulibra'),
  loading: Loading,
});


export default {
  [ThemeCodes.onchaindemy]: onchaindemy,
  [ThemeCodes.edulibra]: edulibra,
}
