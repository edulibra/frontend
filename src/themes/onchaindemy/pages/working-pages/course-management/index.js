import React from 'react';
import Container from 'themes/onchaindemy/pages/working-pages/components/container'
import NewCourse from './create';
import CourseList from './list/index';
import {Button, Input} from "antd";
import './stylesheet.scss';
import {t1} from "i18n";

class CreditSyllabus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showNewForm: false};
  }


  startCreateNewSyllabus = () => {
    this.setState({showNewForm: true});
  }

  onCloseCreateNewCourse = () => {
    this.setState({showNewForm: false})
  }

  drawContentHeader = () => {
    return <div className='ui-content-body-top'>
      <div className='search-box'>
        <Input size='large' defaultValue="mysite"/>
      </div>
      <div className='ui-search-box-control'>
        <Button type="primary" shape="round" icon="search" size='large'>
          {t1('Search')}
        </Button>

        <Button type="primary" shape="round" icon="plus" size='large' onClick={this.startCreateNewSyllabus}>
          {t1('New')}
        </Button>
      </div>
    </div>
  }

  render() {
    return (
      <Container contentHeader={this.drawContentHeader()}>
        <div className="ui-working-screen">
          <div className="ui-login-panel">
            <CourseList/>
          </div>
        </div>

        <NewCourse showDialog={this.state.showNewForm} onClose={this.onCloseCreateNewCourse}/>
      </Container>
    );
  }
}

export default CreditSyllabus;
