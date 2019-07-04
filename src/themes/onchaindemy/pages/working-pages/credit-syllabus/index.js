import React from 'react';
import Container from 'themes/onchaindemy/pages/working-pages/components/container'
import {t1, t} from "i18n";
import {connect} from 'react-redux';
import NewCreditSyllabus from './create';
import CreditSyllabusList from './list/index';
import './stylesheet.scss';
import {Button, Input, Icon} from "antd";
import {Link} from "react-router-dom";

class CreditSyllabus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showNewForm: false};
  }


  startCreateNewSyllabus = () => {
    this.setState({showNewForm: true});
  }

  onColseCreateNewSyllabus = () => {
    this.setState({showNewForm: false})
  }

  drawContentHeader = () => {
    return <div className='ui-content-body-top'>
      <div className='search-box'>
        <Input size='large' defaultValue="mysite"/>
      </div>
      <div className='ui-search-box-control'>
        <Button type="primary" shape="round" icon="search" size='large'>
          Search
        </Button>

        <Button type="primary" shape="round" icon="plus" size='large' onClick={this.startCreateNewSyllabus} >
          New
        </Button>
      </div>
    </div>
  }

  render() {
    return (
      <Container contentHeader={this.drawContentHeader()}>
        <div className="ui-working-screen">
          <div className="ui-login-panel">
            <CreditSyllabusList/>
          </div>
        </div>

        <NewCreditSyllabus showDialog={this.state.showNewForm} onClose={this.onColseCreateNewSyllabus}/>
      </Container>
    );
  }
}

export default CreditSyllabus;
