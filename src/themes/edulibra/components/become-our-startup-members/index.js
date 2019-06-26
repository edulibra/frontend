import React from 'react';
import {Progress} from 'antd';
import {Doughnut} from 'react-chartjs-2';
import {t1} from 'i18n';
import './stylesheet.scss';

const Item = ({title, icon, discription, imageClass}) => (
  <div className="mission-item">
    <div className='image-panel'>
      <img className={imageClass} src={icon}/>
    </div>
    <div>
      <h4 className="title">{title} </h4>
      <p>
        {discription}
      </p>
    </div>
  </div>
)
const data = {
  labels: [
    'Investors',
    'Advisor',
    'Founders',

  ],
  datasets: [{
    data: [40, 8, 52],
    backgroundColor: [
      '#8fcfba',
      '#FFCE56',
      '#42318c',
    ],
    hoverBackgroundColor: [

      '#8fcfb1',
      '#FFCE56',
      '#3d2d83',
    ]
  }]
};

class BecomeOurStartupMembers extends React.Component {

  render() {
    return (
      <div className="ui-edulibra-become-our-members">
        <h2 className='title-panel tTop'> {t1('Become our co-founders')}: </h2>
        <div className='ui-edulibra-content'>
          <div className='sharing-stake'>
            <Doughnut data={data} options={{
              legend: {position: 'bottom'},
            }}>
            </Doughnut>
          </div>

          <div className='sharing-desc'>
            <h2 className='title-panel tContent'> {t1('Become our co-founders')}: </h2>
            <ul className="sharing-detail">
              <li className="item">
                We will give <b>20% company sharing</b> for someone who want to become a early investor.
                <Progress percent={20}/>
              </li>
              <li className="item">You will get <b>stake</b> of company and the <b>ratio of edulibra token</b> in co-founder team</li>
              <li className="item">Your money will <b>only use to build the product</b></li>
              <li className="item">Our plan is get <b>$3M</b> to help the dev team build the production.</li>
              <li className="item">Early Investor must invest minimum from <b>0.05%</b> ($7500) to join this program</li>
            </ul>
          </div>

        </div>

      </div>
    );
  }
}

export default BecomeOurStartupMembers;

