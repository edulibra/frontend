import React from 'react';
import {Icon, Drawer, Button} from 'antd';
import {t1} from 'i18n';
import OnchaindemyLogo from '../logo';
import {connect} from 'react-redux';
import Menu from 'layouts/common/menu';
import menuSchema from './menu-schema';
import logo from 'themes/onchaindemy/assets/svg/logo.svg';
import './stylesheet.scss';
import {Link} from "react-router-dom";
import actionCommon from "action-creators/common";
import LoginedUser from "../../../../components/common/viewers/login-user";

class ContactHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  showMenu = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onUserLoginClick = () => {
    const {dispatch} = this.props;
    dispatch(actionCommon.setStatusOfFormView({
      viewId: 'register_or_login_drawer',
      display: true,
      title: t1('User login')
    }));
  }

  render() {

    const {authInfo, user} = this.props;
    return (
      <div className="ui-onchaindemy-top-menu">
        <div className="content">
          <Link to='/' className='ui-logo'>
            <OnchaindemyLogo/>
          </Link>
          <div className='pc-normal-header'>
            <Menu
              mode="horizontal"
              className="ui-header-menu"
              onClick={this.onClose}
              style={{lineHeight: '35px'}}
              schema={menuSchema}
            />
          </div>

          {
            (!authInfo || !authInfo.token) &&
            <div className='user-login-register'>
              <Button type="secondary" className='get-start' shape="round" size='large'>
                {t1('Get Start')}
              </Button>
              <Button type="primary" onClick={this.onUserLoginClick} shape="round" icon="user" size='large'>
                {t1('Login')}
              </Button>
            </div>
          }

          {
            authInfo && authInfo.token && <div className='user-login-register'>
              <LoginedUser/>
            </div>
          }

        </div>
        <Drawer
          className="ui-onchaindemy-mobile-menu"
          title={
            <div className="ui-left">
              <div className="ui-logo ui-item">
                <img src={logo}/>
              </div>
            </div>
          }
          placement="top"
          closable
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Menu
            mode="inline"
            onClick={this.onClose}
            className="ui-header-menu"
            defaultSelectedKeys={['abcdef', '12312']}
            style={{lineHeight: '64px'}}
            schema={menuSchema}
          />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userStore = state.user || {}
  return {
    user: userStore.user,
    authInfo: userStore.authInfo
  }
}

export default connect(mapStateToProps)(ContactHeader);

