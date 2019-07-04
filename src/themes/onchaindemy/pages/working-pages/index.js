import React from 'react';
import Container from 'themes/onchaindemy/pages/working-pages/components/container'
import {t1, t} from "i18n";
import {connect} from 'react-redux';
import './stylesheet.scss';

class WorkingPage extends React.Component {

  render() {
    return (
      <Container>
        <div className="ui-working-screen">
          <div className="ui-login-panel">
            <h2 className='title'>{t1('Course not found!')}</h2>
            <div className='welcome-msg'>{t('You can trying to find another course!')}</div>
          </div>
        </div>
      </Container>
    );
  }
}

export default connect()(WorkingPage);
