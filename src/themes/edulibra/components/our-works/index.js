import React from 'react';
import {Divider} from 'antd';
import {t1} from 'i18n';
import elearning from '../../assets/svg/elearning.svg'
import certificate from '../../assets/svg/certificate.svg'
import paymentGateway from '../../assets/svg/payment-gateway.svg'
import schoolManagement from '../../assets/images/school-management.png'
import './stylesheet.scss';

const Item = ({title, icon, discription, imageClass}) => (
  <div className="working-item">
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

class OurWorks extends React.Component {

  render() {
    const {className} = this.props;
    return (
      <div className={`ui-our-works ${className}`}>

        <h2 className='title-panel'> {t1('our works')}: </h2>
        <div className='ui-edulibra-mission-content'>
          <Item
            icon={elearning}
            title={t1('Online platform')}
            discription='The online education platform will available soon.
            We will focus on online courses, online contest, blended learning.
            Learners, trainers, Company, University can use this platform.
            The output will be store on the Libra network'
          />
          <Item
            icon={schoolManagement}
            imageClass={'school-management'}
            title={t1('School management')}
            discription='We want to build the platform to help schools can easy to manage student, learning program, syllabus, teaching plan.
            The degree, certificate, score and most of important data will be store on the blockchain of Libra network.
            We will help the learners can use crypto to pay all the fee in the schools'
          />
          <Item
            icon={certificate}
            title={t1('Qualification verification')}
            discription='We provide solutions to verify the certificates and qualifications offered by units and schools'
          />
          <Item
            icon={paymentGateway}
            title={t1('Payment gateway')}
            discription='We provider the Education payment gateway.
            This solution will help the crypto can be used widely on the education industry.
            Libra is most importance crypto currency that we will focus'
          />
        </div>

      </div>
    );
  }
}

export default OurWorks;

