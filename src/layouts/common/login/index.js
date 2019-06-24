import React from 'react';
import LoginForm from './form';
import './stylesheet.scss';

/**
 * Created by edulibra.org@gmail.com
 * Email: edulibra.org@gmail.com
 **/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui-my-component">
        <LoginForm />
      </div>
    );
  }
}

export default MyComponent;
