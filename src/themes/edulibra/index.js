import React from 'react';
import Layout from 'antd/lib/layout';
import { connect } from 'react-redux';
import TopHeader from './components/top-header';
import AsterFooter from './components/footer';
// import HomePage from './pages/home';
// import ClientFeedback from './client-feedback';
// import ContactUs from './contact-us';
import './stylesheet.scss';
import { renderRoutes } from 'react-router-config';
import { t1 } from '../../i18n';

const { Header, Content, Footer, Sider } = Layout;

class AsterLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { themeId, route } = this.props;

    return (
      <Layout className="ui-edulibra-layout">
        <TopHeader />
        <Content className="ui-edulibra-body">
          {this.props.children}
        </Content>
        <Footer>
          <AsterFooter />
        </Footer>
      </Layout>
    );
  }
}

export default connect()(AsterLayout);

