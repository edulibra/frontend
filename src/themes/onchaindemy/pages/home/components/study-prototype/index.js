import React from 'react';
import {connect} from 'react-redux';
import laptopUI from 'themes/onchaindemy/assets/images/laptopUI.png';
import mobileUI from 'themes/onchaindemy/assets/images/mobileUI.png';
import './stylesheet.scss';
import Particles from "react-particles-js";
import JsonData from "../../../../../edulibra/pages/common/ParticlesConfig";

class Banner extends React.Component {

  render() {
    return (
      <div className="ui-home-prototype">
        <div className='ui-bg-color'>
          <Particles params={JsonData}/>
        </div>
        <div className='image-panel'>
          <img src={laptopUI}/>
          <img className='ui-mobile-prototype' src={mobileUI}/>
        </div>
      </div>
    );
  }
}

export default connect()(Banner);
