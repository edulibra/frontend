import React from 'react';
import {connect} from 'react-redux';
import './stylesheet.scss';

class CashRent extends React.Component {

  render() {
    return (
      <div className="ui-home-page">
        homepage
      </div>
    );
  }
}

export default connect()(CashRent);
