import PAGE_CODES from 'themes/register/PageCodes'
import Loadable from "react-loadable";
import Loading from "components/common/viewers/loading";

const Home = Loadable({
  loader: () => import('./home'),
  loading: Loading,
});

const OnchaindemyPage = Loadable({
  loader: () => import(/*edulibra.onchaindemy*/'./onchaindemy'),
  loading: Loading,
});

const RoadMap = Loadable({
  loader: () => import(/*edulibra.road-map*/'./road-map'),
  loading: Loading,
});

const WhitePaper = Loadable({
  loader: () => import(/*edulibra.road-map*/'./whitepaper'),
  loading: Loading,
});


export default {
  [PAGE_CODES.HOME]: Home,
  [PAGE_CODES.ONCHAINDEMY_PAGE]: OnchaindemyPage,
  [PAGE_CODES.ROAD_MAP]: RoadMap,
  [PAGE_CODES.WHITE_PAPER]: WhitePaper,
}
