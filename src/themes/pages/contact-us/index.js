import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/common/viewers/loading';

const ContactUs = Loadable({
  loader: () => import(/* webpackChunkName: "edulibra.contactUs" */ 'themes/edulibra/pages/contact-us'),
  loading: Loading,
});

export default {
  edulibra: ContactUs,
};
