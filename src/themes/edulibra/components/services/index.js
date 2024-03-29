import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import OutsourcingIcon from '../../assets/svg/oursourcing-icon.svg';
import OffshoreIcon from '../../assets/svg/offshore.svg';
import consultation from '../../assets/svg/consultation.svg';
import ServiceBox from './service-box';
import { t1 } from 'i18n';
import './stylesheet.scss';

class ServicesLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui-edulibra-service">
        <div className="ui-edulibra-service-top" />
        <div className="ui-title-panel">
          <h3>Our offer services</h3>
        </div>
        <div className="ui-edulibra-service-content">
          <div className="ui-service-detail">
            <div className="service-item icon-panel">
              <ServiceBox className="icon-panel" icon={OutsourcingIcon} />
              <div className="service-item-content">
                <div className="title">{t1('Offshore services')}</div>
                <p className="desc">
                  web app offshore service web app offshore serviceweb app offshore serviceweb app offshore serviceweb app offshore service
                </p>
                <ul className="service-outline">
                  <li>
                    <Icon type="check" />
                    <span>web app offshore service</span>
                  </li>
                  <li>
                    <Icon type="check" />
                    <span>web app offshore service</span>
                  </li>
                  <li>
                    <Icon type="check" />
                    <span>web app offshore service</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="service-item icon-panel">
              <ServiceBox className="icon-panel" icon={OffshoreIcon} />
              <div className="service-item-content">
                <div className="title">{t1('Oursourcing services')}</div>
                <p className="desc">
                  web app offshore service web app offshore serviceweb app offshore serviceweb app offshore serviceweb app offshore service
                </p>
                <ul className="service-outline">
                  <li>
                    <Icon type="check" />
                    <span>web app offshore service</span>
                  </li>
                  <li>
                    <Icon type="check" />
                    <span>web app offshore service</span>
                  </li>
                  <li>
                    <Icon type="check" />
                    <span>web app offshore service</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="service-item">
              <ServiceBox className="consulting  icon-panel" icon={consultation} />
              <div className="service-item-content">
                <div className="title">{t1('consulting services')}</div>
                <p className="desc">
                  web app offshore service web app offshore service web app offshore serviceweb app offshore serviceweb app offshore service
                </p>
                <ul className="service-outline">
                  <li>
                    <Icon type="check" />
                    <span>web app offshore service</span>
                  </li>
                  <li>
                    <Icon type="check" />
                    <span>web app offshore service</span>
                  </li>
                  <li>
                    <Icon type="check" />
                    <span>web app offshore service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ServicesLayout);

