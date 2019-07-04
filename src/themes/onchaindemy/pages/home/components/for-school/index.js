import React from 'react';
import {t} from 'i18n';
import kids_bg from 'themes/onchaindemy/assets/images/kids_bg.png';
import './stylesheet.scss';

class OnchaindemyForSchool extends React.Component {

  render() {
    return (
      <div className="ui-onchaindemy-for-school">
        <div className='ui-present-idea'>
          <div className='ui-left-present'>
            <div className={'present-title'}>onchaindemy for K12</div>
            <p>
              {t('K–12 (spoken as "k twelve", "k through twelve", or "k to twelve"), for kindergarten to 12th grade ' +
                'our K12 system will provide the core system that using for the school')}
            </p>
          </div>
          <div className='ui-right-present'>
            <img src={kids_bg}/>
          </div>
        </div>
      </div>
    );
  }
}

export default OnchaindemyForSchool;
