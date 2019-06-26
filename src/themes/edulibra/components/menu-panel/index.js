import React from 'react';
import {Drawer, Icon} from 'antd';
import { Link } from 'react-router-dom';
import menuSchema from './menu-schema';
import Menu from 'layouts/common/menu';
import { connect } from 'react-redux';
import logo from '../../assets/svg/logo.svg';
import './stylesheet.scss';


class MenuPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  switchMenu = () => {

    this.setState({
      visible: !this.state.visible,
    });
  };


  render() {
    return (
      <div className="ui-edulibra-menu">
        <div className="ui-edulibra-menu-content">
          <div className="top-banner">
            <Link className="ui-logo" to={'/'}>
              <img src={logo} />
              <div className='edulibra'>edulibra</div>
            </Link>
            <div className="ui-menu-panel">
              <Menu
                mode="horizontal"
                className="ui-header-menu"
                style={{ lineHeight: '64px' }}
                schema={menuSchema}
              />
              <Icon onClick={this.switchMenu} className={'menu-icon'} type="menu" />
            </div>
          </div>

        </div>

        <Drawer
          className="ui-edulibra-mobile-menu"
          title={
            <div className="ui-left">
              <div className="ui-logo-menu">
                <img src={logo} /> edulibra
              </div>
            </div>
          }
          placement="top"
          closable
          onClose={this.switchMenu}
          visible={this.state.visible}
        >
          <Menu
            mode="inline"
            onClick={this.onClose}
            className="ui-header-menu-mobile"
            defaultSelectedKeys={['abcdef', '12312']}
            style={{ lineHeight: '64px' }}
            schema={menuSchema}
          />
        </Drawer>
      </div>
    );
  }
}

export default connect()(MenuPanel);

