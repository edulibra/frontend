import React from 'react';
import {Divider} from 'antd';
import {t1} from 'i18n';
import elearning from '../../assets/svg/elearning.svg'
import certificate from '../../assets/svg/certificate.svg'
import paymentGateway from '../../assets/svg/payment-gateway.svg'
import schoolManagement from '../../assets/images/school-management.png'
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

class OurMission extends React.Component {

  render() {
    return (
      <div className="ui-edulibra-white-paper">
        <div className='title-panel'>
          Now, we are focusing on how to build the product. The white paper will available soon.
          <br/>
          Please look on our work bellow!
        </div>
      </div>
    );
  }
}

export default OurMission;

