import React from 'react';
import UserLoginForm from 'components/user/login';
import './stylesheet.scss';
import {t1, t} from "i18n";
import {connect} from 'react-redux';
import actionCommon from "action-creators/common";

class UserLoginOrRegister extends React.Component {

  onLoginSuccess = (result) => {
    const {dispatch} = this.props;
    dispatch(actionCommon.setStatusOfFormView({
      viewId: 'register_or_login_drawer',
      display: false
    }));
  }

  render() {
    return (
      <div className="ui-user-login-register">
        <div className="ui-login-panel">
          <h2 className='title'>{t1('Hi there!')}</h2>
          <div className='welcome-msg'>{t('We are so happy to have you again!')}</div>
          <UserLoginForm onLoginSuccess={this.onLoginSuccess}/>
        </div>

      </div>
    );
  }
}

export default connect()(UserLoginOrRegister);
