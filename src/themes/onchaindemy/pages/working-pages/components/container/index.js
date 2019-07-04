import React from 'react';
import {t1, t} from "i18n";
import {connect} from 'react-redux';
import OnchaindemyLogo from "../../../../components/logo";
import Layout from "antd/lib/layout";
import PropTypes from 'prop-types';
import {history} from 'store';
import Menu from "layouts/common/menu";
import menuSchema from "./left-menu/menu-schema";
import {Input, Icon, Tooltip} from "antd";
import LoginedUser from "../../../../../../components/common/viewers/login-user";
import {Link} from "react-router-dom";
import './stylesheet.scss';

const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;

class AcademyWorkingPageContainer extends React.Component {
  state = {
    leftMenuStatus: false,
  };

  drawerSwitcher = () => {
    this.setState({leftMenuStatus: !this.state.leftMenuStatus});
  };

  render() {
    return (

      <Layout className="ui-academy-working-page">
        <Header className="ui-working-header">
          <Link to={'/'} className='ui-logo-panel' target={'_blank'}>
            <OnchaindemyLogo className={'ui-logo'}/>
          </Link>
          <div className='ui-search-header-panel'>
            {/*<Search className='search-input' placeholder="Search public courses on our blockchain" enterButton/>*/}
          </div>

          <div className='ui-control-help'>
            <Tooltip title="The help pages will avaiable soon!">
              <Icon className='question' type="question-circle"/>
            </Tooltip>
            <Icon className='ui-layout' onClick={this.drawerSwitcher} type="layout"/>
            <LoginedUser/>
          </div>
        </Header>
        <Layout className={'ui-working-body'}>
          <Sider className={'ui-slide-right'} width={230} collapsed={this.state.leftMenuStatus}
                 onCollapse={this.drawerSwitcher}>
            <Menu
              mode="inline"
              selectedKeys={[history.location.pathname]}
              className="ui-academy-menu"
              onClick={this.onClose}
              style={{lineHeight: '35px'}}
              schema={menuSchema}
            />
          </Sider>
          <Content className={'ui-main-working-body'}>
            {this.props.contentHeader}
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

AcademyWorkingPageContainer.propTypes = {
  contentHeader: PropTypes.any
}

export default connect()(AcademyWorkingPageContainer);
