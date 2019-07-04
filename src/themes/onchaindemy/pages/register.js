import PAGE_CODES from 'themes/register/PageCodes'
import Loadable from "react-loadable";
import Loading from "components/common/viewers/loading";

const Home = Loadable({
  loader: () => import('./home'),
  loading: Loading,
});

const UserLoginOrRegister = Loadable({
  loader: () => import('./user-login-register'),
  loading: Loading,
});
const WorkingPages = Loadable({
  loader: () => import('./working-pages'),
  loading: Loading,
});

const CreditSyllabusList = Loadable({
  loader: () => import('./working-pages/credit-syllabus'),
  loading: Loading,
});

const CreditSyllabusDetail = Loadable({
  loader: () => import('./working-pages/credit-syllabus/create'),
  // loader: () => import('components/admin/credit/SyllabusDetail'),
  loading: Loading,
});

const CourseManagement = Loadable({
  loader: () => import('./working-pages/course-management'),
  // loader: () => import('components/admin/credit/SyllabusDetail'),
  loading: Loading,
});

const CourseDetail = Loadable({
  loader: () => import('./working-pages/course-management/detail'),
  loading: Loading,
});


export default {
  [PAGE_CODES.HOME]: Home,
  [PAGE_CODES.USER_LOGIN_REGISTER]: UserLoginOrRegister,
  [PAGE_CODES.ONCHAINDEMY_WORKING_PAGES]: WorkingPages,
  [PAGE_CODES.CREDIT_SYLLABUS_LIST]: CreditSyllabusList,
  [PAGE_CODES.CREDIT_SYLLABUS_DETAIL]: CreditSyllabusDetail,
  [PAGE_CODES.COURSE_MANAGEMENT]: CourseManagement,
  [PAGE_CODES.COURSE_DETAIL]: CourseDetail,
}
