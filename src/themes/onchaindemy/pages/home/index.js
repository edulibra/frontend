import React from 'react';
import {connect} from 'react-redux';
import Banner from './components/banner';
import Introduction from './components/introduction';
import HowItWork from './components/how-it-work';
import OnchaindemyForSchool from './components/for-school';
import OurWorks from 'themes/edulibra/components/our-works';
import CoursePrototype from './components/study-prototype';
import {Input} from 'antd';
import './stylesheet.scss';

const {Search} = Input;

class CashRent extends React.Component {

  render() {
    return (
      <div className="ui-home-onchaindemy">
        <Banner/>
        <CoursePrototype/>
        <Introduction/>
        <div className='bgf0f3f2'>
          <OurWorks/>
        </div>
        <HowItWork/>
        <OnchaindemyForSchool/>

      </div>
    );
  }
}

export default connect()(CashRent);
