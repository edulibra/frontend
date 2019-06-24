import React from 'react';
import {connect} from 'react-redux';
import MenuPanel from '../../components/menu-panel';
import ContactUs from '../../components/contact-us';
import OurWorks from '../../components/our-works';
import BecomeOurStartupMembers from '../../components/become-our-startup-members';
import roadmapImg from 'themes/edulibra/assets/images/roadmap.jpg';
import './stylesheet.scss';
import ImageBackGround from 'components/common/viewers/image-background';
import logo from "../../assets/svg/logo.svg";
import Loadable from "react-loadable";
import Loading from "../../../../components/common/viewers/loading";

const RoadmapComponent = Loadable({
  loader: () => import(/* webpackChunkName: "edulibra.Roadmap" */ 'themes/edulibra/components/roadmap'),
  loading: Loading,
});

class Roadmap extends React.Component {

  render() {
    return (
      <div className="ui-home-page">
        <div className="ui-home-banner">
          <ImageBackGround src={roadmapImg} height={300}>
            <MenuPanel/>
            <div className="home-ads">
              <div>
                <h1 className="title">
                  onchaindemy.com
                </h1>

              </div>
            </div>
          </ImageBackGround>
        </div>
       <div className={'ui-panel'}>
         simply, onchaindemy is academy for blockchain. This production will available soon.
       </div>
        <OurWorks/>
        <BecomeOurStartupMembers/>
        <ContactUs/>
      </div>
    );
  }
}

export default connect()(Roadmap);

