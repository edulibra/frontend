import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import './stylesheet.scss';
import Discord from 'themes/edulibra/assets/svg/Discord.svg';
import Telegram from 'themes/edulibra/assets/svg/Telegram_logo.svg';
import ContactFormSchema from './ContactFormSchema';
import { t1 } from 'i18n';
import uuid from 'uuid/v4';
import FormGeneration from 'schema-form/GenerateForm';

class AsterLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <div className="ui-contact-us">
        <div className="ui-contact-us-content">
          <div className="ui-contact-info">
            <div>
              <span className="step-number">01/</span>
              <span className="step-name"> Get in touch </span>
            </div>
            <div>
              <p className="message">
                we're very approachable and wold love to speak to you. feel free to call , send us an email, tweet us or
                simply complete the enquiry form
              </p>
              <ul className="contact-info">
                <li>
                  <img width={30} className='m-r-20' src={Telegram} />
                  <a href='https://t.me/edulibra' target="_blank">Telegram</a>
                </li>
                <li>
                  <img width={30} className='m-r-20' src={Discord} />
                  <a href='https://discord.gg/XuMb64' target="_blank">Discordapp</a>
                </li>
                <li>
                  <Icon theme="filled" type="mail" />
                  <a href="mailto:edulibra.org@gmail.com">edulibra.org@gmail.com</a>
                  <span></span>
                </li>
                <li>
                  <Icon type="twitter" />
                  <a href='https://twitter.com/edulibra2' target="_blank">@edulibra2</a>
                </li>
                <li>
                  <Icon theme="filled" type="facebook" />
                  <a href='https://www.facebook.com/Edulibra-448605669298858' target="_blank">facebook.com</a>
                </li>

              </ul>
            </div>
          </div>
          <div className="ui-send-message">
            <div>
              <span className="step-number">02/</span>
              <span className="step-name"> Send us a message </span>
            </div>
            <FormGeneration
              node="contact"
              onSuccess={(org) => {
                if (org.iid) {
                  history.push(`/admin/organization/${org.iid}`);
                }
              }}
              nodeAction="create"
              submitLabel={t1('send message')}
              formId={uuid()}
              schema={ContactFormSchema}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(AsterLayout);

