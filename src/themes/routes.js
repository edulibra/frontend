import HelperComponent from './pages/HelperComponent';
import homeRegisterConfig from './pages/home';
import aboutUsConfig from './pages/about-us';
import roadmap from './pages/roadmap';
import onchaindemy from './pages/onchaindemy';
import whitepaper from './pages/whitepaper';
import contactUsRegisterConfig from './pages/contact-us';

const ROOT = '';

export default [
  {
    path: `${ROOT}/contact-us`,
    exact: true,
    component: HelperComponent,
    configRegister: contactUsRegisterConfig,
  },
  {
    path: `${ROOT}/about-us`,
    exact: true,
    component: HelperComponent,
    configRegister: aboutUsConfig,
  },
  {
    path: `${ROOT}/roadmap`,
    exact: true,
    component: HelperComponent,
    configRegister: roadmap,
  },
  {
    path: `${ROOT}/onchaindemy`,
    exact: true,
    component: HelperComponent,
    configRegister: onchaindemy,
  },
  {
    path: `${ROOT}/white-paper`,
    exact: true,
    component: HelperComponent,
    configRegister: whitepaper,
  },
  {
    path: ROOT,
    exact: true,
    component: HelperComponent,
    configRegister: homeRegisterConfig,
  },
];
