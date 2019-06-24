import React from 'react';
import './stylesheet.scss';

/**
 * Created by edulibra.org@gmail.com
 * Email: edulibra.org@gmail.com
 **/
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui-default-layout">
        {this.props.children}
      </div>
    );
  }
}

export default index;
