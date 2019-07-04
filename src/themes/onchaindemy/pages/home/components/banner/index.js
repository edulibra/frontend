import React from 'react';
import {connect} from 'react-redux';
import laptopUI from 'themes/onchaindemy/assets/images/laptopUI.png';
import mobileUI from 'themes/onchaindemy/assets/images/mobileUI.png';
import JsonData from 'themes/edulibra/pages/common/ParticlesConfig';
import Particles from 'react-particles-js';
import {Button, Input} from 'antd';
import {t1} from "i18n";
import './stylesheet.scss';
import TopMenu from "../../../../components/top-menu";


const {Search} = Input;

class Banner extends React.Component {

  render() {
    return (
      <div className="ui-home-banner">
        <Particles params={JsonData}/>
        <div className="ui-content-home-banner">
          <TopMenu/>
          <h1 className="big-title">
            {t1('Education on blockchain')}
          </h1>
          <div className='advertising'>
            {t1('One platform for your works in school, company, teacher, learner')}
          </div>

          <div className='action-panel'>
            <Button type="secondary" className='btn' shape="round" size='large'>
              {t1('How to start')}
            </Button>
            <Button type="primary" className='btn' shape="round" size='large'>
              {t1('Become early investor')}
            </Button>
          </div>
          <div className="home-search-panel">
            <Search className='search-input' placeholder="Search public courses on our blockchain" enterButton/>
          </div>
        </div>

      </div>
    );
  }
}

export default connect()(Banner);
