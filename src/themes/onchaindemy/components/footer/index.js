import React from 'react';
import { t, t1, t3 } from 'i18n';
import { Link } from 'react-router-dom';
import './stylesheet.scss';

class OnchaindemyFooter extends React.Component {

  render() {
    return (
      <div className="ui-onchaindemy-footer">
        <div className="ui-onchaindemy-footer-content ui-onchaindemy-home-item">
          <div className="copyright ui-left">
            {t('© 2019 - Edulibra.org')}
          </div>
          <div className="ui-right">
            <div className="ui-item">
              <Link to="/white-paper"><span>{t1('white paper')}</span></Link>
            </div>
            <div className="ui-item">
              <Link to="/roadmap"><span>{t1('road map')}</span></Link>
            </div>
            <div className="ui-item">
              <Link to="/onchaindemy"><span>{t1('onchaindemy')}</span></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OnchaindemyFooter;

