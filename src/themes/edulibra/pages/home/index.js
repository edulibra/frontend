import React from 'react';
import {connect} from 'react-redux';
import MenuPanel from '../../components/menu-panel';
import ContactUs from '../../components/contact-us';
import OurWorks from '../../components/our-works';
import BecomeOurStartupMembers from '../../components/become-our-startup-members';
import background from 'themes/edulibra/assets/images/homebg.jpg';
import './stylesheet.scss';
import ImageBackGround from 'components/common/viewers/image-background';
import logo from "../../assets/svg/logo.svg";
import Loadable from "react-loadable";
import Loading from "../../../../components/common/viewers/loading";

const Roadmap = Loadable({
  loader: () => import(/* webpackChunkName: "edulibra.Roadmap" */ 'themes/edulibra/components/roadmap'),
  loading: Loading,
});

class AsterLayout extends React.Component {

  render() {
    return (
      <div className="ui-home-page">
        <div className="ui-home-banner">
          <ImageBackGround src={background} height={600}>
            <MenuPanel/>
            <div className="home-ads">
              <div>
                <h1 className="title">
                  <img src={logo}/> Libra education token
                </h1>
                <ul className="outline">
                  <li>
                    Our platform working on Libra network
                  </li>
                  <li>
                    Education Saas platform will be available soon on Libra Test Network
                  </li>
                  <li>
                    E-Learning platform will be first production
                  </li>
                </ul>
              </div>
            </div>
          </ImageBackGround>
        </div>

        <OurWorks/>
        <Roadmap/>
        <BecomeOurStartupMembers/>
        <ContactUs/>
      </div>
    );
  }
}

export default connect()(AsterLayout);

