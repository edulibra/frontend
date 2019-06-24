import React from 'react';
import { Icon, Drawer } from 'antd';
import { t1 } from 'i18n';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from 'layouts/common/menu';
import menuSchema from './menu-schema';
import logo from '../../assets/svg/logo.svg';
import './stylesheet.scss';

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

  render() {
    return (
      <div className="ui-edulibra-contact-header">

        <Drawer
          className="ui-edulibra-mobile-menu"
          title={
            <div className="ui-left">
              <div className="ui-logo ui-item">
                <img src={logo} />
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
            style={{ lineHeight: '64px' }}
            schema={menuSchema}
          />
        </Drawer>
      </div>
    );
  }
}

export default connect()(ContactHeader);

