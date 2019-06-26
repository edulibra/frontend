import React from 'react';
import Layout from 'antd/lib/layout';
import { connect } from 'react-redux';
import './stylesheet.scss';

const { Header, Content, Footer, Sider } = Layout;

class CashRent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { themeId, route } = this.props;

    return (
      <Layout className="ui-aster-layout">
        <Header className="ui-aster-header">
          header
        </Header>
        <Content className="ui-aster-body">
          {this.props.children}
        </Content>
        <Footer>
         footer
        </Footer>
      </Layout>
    );
  }
}

export default connect()(CashRent);

