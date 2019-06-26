import React from 'react';
import {connect} from 'react-redux';
import MenuPanel from '../../components/menu-panel';
import ContactUs from '../../components/contact-us';
import OurWorks from '../../components/our-works';
import BecomeOurStartupMembers from '../../components/become-our-startup-members';
import WhitePaper from '../../components/white-paper';
import roadmapImg from 'themes/edulibra/assets/images/roadmap.jpg';
import './stylesheet.scss';
import ImageBackGround from 'components/common/viewers/image-background';
import Particles from "react-particles-js";
import JsonData from "../common/ParticlesConfig";

class WhitePaperPage extends React.Component {

  render() {
    return (
      <div className="ui-white-paper">
        <div className="ui-white-paper-banner">
          <ImageBackGround src={roadmapImg} height={300}>
            <MenuPanel/>
            <Particles  params={JsonData} />
            <div className="home-ads">
              <div>
                <h1 className="title">
                  white paper
                </h1>

              </div>
            </div>
          </ImageBackGround>
        </div>
       <div className={'ui-panel'}>
         Welcome to Libra token for education!
       </div>
        <WhitePaper/>
        <OurWorks/>
        <BecomeOurStartupMembers/>
        <ContactUs/>
      </div>
    );
  }
}

export default connect()(WhitePaperPage);

