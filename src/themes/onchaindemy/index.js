import React from 'react';
import Layout from 'antd/lib/layout';
import PageFooter from 'themes/onchaindemy/components/footer';
import {connect} from 'react-redux';
import UserLogin from './pages/user-login-register';
import {Icon} from 'antd';
import OverlayHelper from "../../schema-form/helper/overlay-helper";
import './stylesheet.scss';

const {Header, Content, Footer, Sider} = Layout;

class CashRent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {themeId, route} = this.props;

    return (
      <Layout className="ui-onchaindemy-layout">
        {/*<Header className="ui-onchaindemy-header">*/}
        {/*<TopMenu/>*/}
        {/*</Header>*/}
        <Content className="ui-onchaindemy-body">
          {this.props.children}
        </Content>
        <Footer>
          <PageFooter/>
        </Footer>

        <OverlayHelper backIcon={<Icon type="rollback"/>} className='ui-user-login-register'
                       viewId='register_or_login_drawer ui-onchanedemy-drawer' hideNewButton={true}>
          <UserLogin/>
        </OverlayHelper>
      </Layout>
    );
  }
}

export default connect()(CashRent);

