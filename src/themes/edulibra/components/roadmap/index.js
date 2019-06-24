import React from 'react';
import {t1} from 'i18n';
import {Icon} from 'antd';
import elearning from '../../assets/svg/elearning.svg'
import certificate from '../../assets/svg/certificate.svg'
import schoolManagement from '../../assets/images/school-management.png'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './stylesheet.scss';


class OurMission extends React.Component {

  render() {

    const {showTitle} = this.props;

    return (
      <div className="ui-edulibra-roadmap">
        <div className='ui-edulibra-roadmap-content'>

          <h2 className='title-panel'> {showTitle !== false && t1('Init Roadmap')} </h2>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="07/2019 - init team"
              iconStyle={{background: 'var(--primary-color)', color: '#fff'}}
              icon={<i aria-label="icon: rise" className="anticon anticon-elearning">
                <svg className="jss74" focusable="false" viewBox="0 0 33 33" aria-hidden="true">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
                </svg>
              </i>}
            >
              <h3 className="vertical-timeline-element-title">Init projects</h3>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
              <p>
                Allow user register. Start to build the community.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work iconImgElearning"
              date="08/2019"
              iconStyle={{background: 'var(--primary-color)', color: '#fff'}}
              icon={<img src={elearning}/>}
            >
              <h3 className="vertical-timeline-element-title">Init E-learning platform</h3>
              <p>
                E-Learning is SAAS system. learners, teachers, schools can easy to init the saas.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="11/2019"
              iconStyle={{background: 'var(--primary-color)', color: '#fff'}}
              icon={<Icon type="rise"/>}>
              <h3 className="vertical-timeline-element-title">Lunching E-learning platform</h3>
              <p>
                First version of e-learning platform will available
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="1/2020"
              iconStyle={{background: 'var(--primary-color)', color: '#fff'}}
              icon={<Icon type="wallet"/>}>
              <h3 className="vertical-timeline-element-title">Init education payment system</h3>
              <p>
                We will setup the Education payment gateway. This solution will provide to the learners, teachers, schools the chance to use crypto currency
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Q2,Q3/2020"
              iconStyle={{background: 'var(--primary-color)', color: '#fff'}}
              icon={<Icon type="wallet"/>}>
              <h3 className="vertical-timeline-element-title">Lunching the edulibra on Libra Network</h3>
              <p>
                The most important Data will be sync to the Libra network
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work iconImgElearning"
              date="Q3/2020"
              iconStyle={{background: 'var(--primary-color)', color: '#fff'}}
              icon={<img src={certificate}/>}>
              <h3 className="vertical-timeline-element-title">Qualification verification </h3>
              <p>
                We provide solutions to verify the certificates and qualifications offered by units and schools
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work iconImg"
              date="Q4/2020"
              iconStyle={{background: 'var(--primary-color)', color: '#fff'}}
              icon={<img src={schoolManagement}/>}>
              <h3 className="vertical-timeline-element-title">Init School management system </h3>
              <p>
                This project will provide features to manage all of works in university, schools.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default OurMission;

